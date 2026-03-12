"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobeCanvas({ className = "" }) {
	const containerRef = useRef(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted || !containerRef.current) return;

		let renderer, camera, scene, globe, globe2, controls, rafId;
		let onResize;
		const container = containerRef.current;

		const init = async () => {
			const [
				{ WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, PointLight, Fog, Group },
				{ default: ThreeGlobe },
				{ OrbitControls },
			] = await Promise.all([
				import("three"),
				import("three-globe"),
				import("three/examples/jsm/controls/OrbitControls.js"),
			]);

			// Fetch countries GeoJSON
			const res = await fetch(
				"https://unpkg.com/three-globe@2.40.4/example/hexed-polygons/ne_110m_admin_0_countries.geojson"
			);
			const countries = await res.json();

			renderer = new WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(container.offsetWidth, container.offsetHeight);
			renderer.shadowMap.enabled = false;
			container.appendChild(renderer.domElement);

			scene = new Scene();
			scene.background = null; // transparent for hero overlay

			camera = new PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 2000);
			camera.position.z = 220;

			// Dreamy lighting (adapted from github-globe)
			scene.add(new AmbientLight(0xbbbbbb, 0.4));
			const dLight = new DirectionalLight(0xffffff, 0.6);
			dLight.position.set(-800, 2000, 400);
			dLight.castShadow = false;
			camera.add(dLight);
			const dLight1 = new DirectionalLight(0x0475ff, 0.8);
			dLight1.position.set(-200, 500, 200);
			dLight1.castShadow = false;
			camera.add(dLight1);
			const pLight = new PointLight(0x06b6d4, 0.4);
			pLight.position.set(200, -300, 200);
			pLight.castShadow = false;
			camera.add(pLight);
			scene.add(camera);

			scene.fog = new Fog(0xf8fafc, 600, 1400);

			// Globe — no base sphere fill, wireframe-style 3D
			globe = new ThreeGlobe({
				waitForGlobeReady: true,
				animateIn: true,
			})
				.showGlobe(false)
				.hexPolygonsData(countries.features)
				.hexPolygonResolution(3)
				.hexPolygonMargin(0.7)
				.hexPolygonAltitude(0.008)
				.showAtmosphere(false)
				.hexPolygonColor(() => "rgba(6,182,212,0.55)");

			// Sample arcs for visual interest (subtle, brand colors)
			const arcs = [
				{ startLat: 28.5, startLng: -81.4, endLat: 33.4, endLng: -112.1 },
				{ startLat: 51.5, startLng: -0.1, endLat: 21.2, endLng: -86.8 },
				{ startLat: 40.7, startLng: -74.0, endLat: 51.5, endLng: -0.1 },
				{ startLat: 34.1, startLng: -118.2, endLat: 28.5, endLng: -81.4 },
				{ startLat: 41.9, startLng: 12.5, endLat: 40.7, endLng: -74.0 },
			];
			globe
				.arcsData(arcs)
				.arcColor(() => "rgba(4,117,255,0.6)")
				.arcStroke(0.4)
				.arcDashLength(0.8)
				.arcDashGap(3)
				.arcDashAnimateTime(2000);

			globe.rotateY(-Math.PI * (5 / 9));
			globe.rotateZ(-Math.PI / 6);
			globe.position.set(150, -50, 0);

			scene.add(globe);
			globe.traverse((obj) => {
				if (obj.isMesh) {
					obj.castShadow = false;
					obj.receiveShadow = false;
				}
			});

			// Second globe — smaller, far left
			globe2 = new ThreeGlobe({
				waitForGlobeReady: true,
				animateIn: true,
			})
				.showGlobe(false)
				.hexPolygonsData(countries.features)
				.hexPolygonResolution(3)
				.hexPolygonMargin(0.7)
				.hexPolygonAltitude(0.008)
				.showAtmosphere(false)
				.hexPolygonColor(() => "rgba(6,182,212,0.55)")
				.arcsData(arcs)
				.arcColor(() => "rgba(4,117,255,0.6)")
				.arcStroke(0.4)
				.arcDashLength(0.8)
				.arcDashGap(3)
				.arcDashAnimateTime(2000);

			globe2.rotateY(-Math.PI * (5 / 9));
			globe2.rotateZ(-Math.PI / 6);
			globe2.position.set(0, 0, 0);

			const globe2Wrapper = new Group();
			globe2Wrapper.add(globe2);
			globe2Wrapper.scale.set(0.35, 0.35, 0.35);
			globe2Wrapper.position.set(-130, 10, 0);

			scene.add(globe2Wrapper);
			globe2.traverse((obj) => {
				if (obj.isMesh) {
					obj.castShadow = false;
					obj.receiveShadow = false;
				}
			});

			controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;
			controls.dynamicDampingFactor = 0.02;
			controls.enablePan = false;
			controls.enableRotate = false;
			controls.enableZoom = false;

			onResize = () => {
				if (!container?.parentElement) return;
				const w = container.offsetWidth;
				const h = container.offsetHeight;
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
				renderer.setSize(w, h);
			};
			window.addEventListener("resize", onResize);

			const baseY = -Math.PI * (5 / 9);
			const baseZ = -Math.PI / 6;
			const animate = () => {
				rafId = requestAnimationFrame(animate);
				const t = performance.now() * 0.0003;
				globe.rotation.y = baseY + t;
				globe.rotation.z = baseZ;
				globe2.rotation.y = baseY + t;
				globe2.rotation.z = baseZ;
				controls.update();
				renderer.render(scene, camera);
			};
			animate();
		};

		let cancelled = false;
		init().catch((err) => {
			if (!cancelled) console.error("GlobeCanvas init error:", err);
		});

		return () => {
			cancelled = true;
			if (onResize) window.removeEventListener("resize", onResize);
			if (rafId) cancelAnimationFrame(rafId);
			try {
				controls?.dispose();
				renderer?.dispose();
				if (renderer?.domElement && container?.contains(renderer.domElement)) {
					container.removeChild(renderer.domElement);
				}
			} catch (_) {}
		};
	}, [mounted]);

	if (!mounted) return null;

	return (
		<div
			ref={containerRef}
			className={`inset-0 w-full h-full ${className}`}
			style={{ opacity: 0.85 }}
			aria-hidden="true"
		/>
	);
}
