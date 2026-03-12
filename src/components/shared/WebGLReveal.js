"use client";

import { useEffect, useRef, useState } from "react";

const VERTEX_SHADER = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_reveal;
uniform vec2 u_resolution;
varying vec2 vUv;

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  float d = length(p);
  float angle = atan(p.y, p.x);
  float sweep = (angle + 3.14159) / 6.28318;
  float edge = smoothstep(u_reveal - 0.15, u_reveal + 0.05, sweep);
  float ring = exp(-d * 2.0) * (1.0 - exp(-d * 8.0));
  float alpha = edge * ring * 0.12 * (1.0 - u_reveal * 0.5);
  vec3 color = vec3(0.4, 0.6, 0.9);
  gl_FragColor = vec4(color, alpha);
}
`;

function createShader(gl, type, source) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
}

export default function WebGLReveal({ visible = false, delay = 0, className = "" }) {
	const canvasRef = useRef(null);
	const rafRef = useRef(null);
	const revealRef = useRef(0);
	const startTimeRef = useRef(null);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		if (!visible) return;
		const t = setTimeout(() => setStarted(true), delay);
		return () => clearTimeout(t);
	}, [visible, delay]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || !started) return;

		const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
		if (!gl) return;

		const program = gl.createProgram();
		gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
		gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
		gl.linkProgram(program);
		gl.useProgram(program);

		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
		const posLoc = gl.getAttribLocation(program, "position");
		gl.enableVertexAttribArray(posLoc);
		gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

		const uRevealLoc = gl.getUniformLocation(program, "u_reveal");
		const uResLoc = gl.getUniformLocation(program, "u_resolution");

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		const resize = () => {
			const rect = canvas.parentElement?.getBoundingClientRect();
			if (!rect || rect.width <= 0) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const w = Math.floor(rect.width * dpr);
			const h = Math.floor(rect.height * dpr);
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
				canvas.style.width = rect.width + "px";
				canvas.style.height = rect.height + "px";
				gl.viewport(0, 0, w, h);
			}
		};

		const render = (timestamp) => {
			if (!startTimeRef.current) startTimeRef.current = timestamp;
			const elapsed = (timestamp - startTimeRef.current) * 0.001;
			revealRef.current = Math.min(1, elapsed / 0.6);

			resize();
			gl.clearColor(0, 0, 0, 0);
			gl.clear(gl.COLOR_BUFFER_BIT);

			gl.uniform1f(uRevealLoc, revealRef.current);
			gl.uniform2f(uResLoc, canvas.width, canvas.height);
			gl.drawArrays(gl.TRIANGLES, 0, 6);

			if (revealRef.current < 1) {
				rafRef.current = requestAnimationFrame(render);
			}
		};

		resize();
		rafRef.current = requestAnimationFrame(render);

		const ro = new ResizeObserver(resize);
		ro.observe(canvas.parentElement);

		return () => {
			ro.disconnect();
			cancelAnimationFrame(rafRef.current);
		};
	}, [started]);

	return (
		<canvas
			ref={canvasRef}
			className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
			aria-hidden="true"
		/>
	);
}
