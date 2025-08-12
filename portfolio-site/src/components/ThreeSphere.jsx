import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generateSpherePoints(count, radius) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    positions.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  }
  return new Float32Array(positions);
}

function ParticleSphere({ count = 2000, radius = 2, mouse }) {
  const ref = useRef();
  const sphere = generateSpherePoints(count, radius);

  useFrame(() => {
    ref.current.rotation.y += 0.0015;
    ref.current.rotation.x += 0.0008;
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.current.x * 0.5,
      0.05
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.current.y * 0.5,
      0.05
    );
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial transparent color="#60a5fa" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export default function ThreeScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div style={{ height: "100%", width: "100%" }} onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ParticleSphere mouse={mouse} />
      </Canvas>
    </div>
  );
}
