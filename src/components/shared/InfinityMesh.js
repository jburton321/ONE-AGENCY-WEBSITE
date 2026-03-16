"use client";

import { useEffect, useRef } from "react";

const SVG_D =
	"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z";

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mvPosition.xyz);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 colorDeep;
  uniform vec3 colorBright;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float snakePos = mod(uTime * 0.8, 1.0);
    float distToHead = abs(vUv.x - snakePos);
    distToHead = min(distToHead, 1.0 - distToHead);
    float gradientWidth = 0.3;
    float flow = smoothstep(gradientWidth, 0.0, distToHead);
    vec3 baseColor = mix(colorDeep, colorBright, flow);

    vec3 lightDir = normalize(vec3(0.5, 1.0, 2.0));
    float NdotL = max(dot(vNormal, lightDir), 0.0);
    float chiselEdge = pow(NdotL, 50.0) * 0.9;

    float rim = pow(0.8 - max(dot(vNormal, vViewDir), 0.0), 3.0);
    vec3 softBevel = baseColor * rim * 0.4;

    gl_FragColor = vec4(baseColor + softBevel + (vec3(1.0) * chiselEdge), 1.0);
  }
`;

export default function InfinityMesh({ className, style, cameraZ = 120, meshScale = 1 }) {
	const containerRef = useRef(null);
	const cleanupRef = useRef(() => {});

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let cancelled = false;

		(async () => {
			const THREE = await import("three");
			if (cancelled) return;

			const {
				Curve,
				Vector3,
				Scene,
				PerspectiveCamera,
				WebGLRenderer,
				TubeGeometry,
				ShaderMaterial,
				Color,
				Mesh,
			} = THREE;

			function sampleSvgPath(numSamples) {
				const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				const pathElem = document.createElementNS("http://www.w3.org/2000/svg", "path");
				pathElem.setAttribute("d", SVG_D);
				svg.appendChild(pathElem);
				document.body.appendChild(svg);

				const length = pathElem.getTotalLength();
				const points = [];

				for (let i = 0; i <= numSamples; i++) {
					const t = i / numSamples;
					const pt = pathElem.getPointAtLength(t * length);
					points.push(new Vector3(pt.x - 93.65, pt.y - 46.85, 0));
				}

				document.body.removeChild(svg);
				return points;
			}

			class SVGFigure8Curve extends Curve {
				constructor(pts) {
					super();
					this.pts = pts;
				}
				getPoint(t, optionalTarget = new Vector3()) {
					const idx = Math.floor(t * (this.pts.length - 1));
					const nextIdx = Math.min(idx + 1, this.pts.length - 1);
					const localT = t * (this.pts.length - 1) - idx;
					const lerped = this.pts[idx].clone().lerp(this.pts[nextIdx], localT);
					const tx = t * Math.PI * 2;
					return optionalTarget.set(lerped.x, lerped.y, Math.cos(tx) * 12);
				}
			}

			const scene = new Scene();
			const camera = new PerspectiveCamera(
				35,
				container.clientWidth / container.clientHeight,
				2,
				1000
			);
			const renderer = new WebGLRenderer({ antialias: true, alpha: true });
			renderer.setSize(container.clientWidth, container.clientHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			container.appendChild(renderer.domElement);

			const numSamples = 5000;
			const pathPoints = sampleSvgPath(numSamples);
			const path = new SVGFigure8Curve(pathPoints);

			const geometry = new TubeGeometry(path, 5000, 8, 10, true);

			const material = new ShaderMaterial({
				uniforms: {
					uTime: { value: 0 },
					colorDeep: { value: new Color(0x0668e1) },
					colorBright: { value: new Color(0x00f2ff) },
				},
				vertexShader,
				fragmentShader,
			});

			const mesh = new Mesh(geometry, material);
			mesh.scale.setScalar(meshScale);
			scene.add(mesh);
			camera.position.z = cameraZ;

			let animationId;
			function animate(time) {
				animationId = requestAnimationFrame(animate);
				material.uniforms.uTime.value = time * 0.001;
				renderer.render(scene, camera);
			}
			animate(0);

			function handleResize() {
				if (!container) return;
				const w = container.clientWidth;
				const h = container.clientHeight;
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
				renderer.setSize(w, h);
			}
			window.addEventListener("resize", handleResize);

			cleanupRef.current = () => {
				cancelAnimationFrame(animationId);
				window.removeEventListener("resize", handleResize);
				renderer.dispose();
				geometry.dispose();
				material.dispose();
				if (container.contains(renderer.domElement)) {
					container.removeChild(renderer.domElement);
				}
			};
		})();

		return () => {
			cancelled = true;
			cleanupRef.current();
		};
	}, [cameraZ, meshScale]);

	return (
		<div
			ref={containerRef}
			className={className ?? "absolute top-1/2 left-1/2 pointer-events-none"}
			style={
				style ?? {
					width: "2800px",
					height: "1500px",
					transform: "translate(calc(-50% + 200px), -50%)",
				}
			}
			aria-hidden="true"
		/>
	);
}
