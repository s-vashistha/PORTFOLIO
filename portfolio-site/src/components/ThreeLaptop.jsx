import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import * as THREE from "three";

function LaptopModel({ mouse }) {
  const group = useRef();
  const modelUrl = `${import.meta.env.BASE_URL}models/laptop.glb`;
  const { scene } = useGLTF(modelUrl);

  // Make screen glow if exists
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes("screen")) {
        child.material.emissive = new THREE.Color("#00ccff");
        child.material.emissiveIntensity = 1.5;
        child.material.color = new THREE.Color("#001122");
      }
    });
  }, [scene]);

  // Floating + slow rotation
  useFrame((state) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.current.x * 0.5,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.current.y * 0.3,
      0.05
    );
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
  });

  return <primitive ref={group} object={scene} scale={2.5} />;
}

export default function ThreeLaptop() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="h-full w-full" onMouseMove={handleMouseMove}>
      <Canvas
          style={{ width: "110%", height: "100%" }}
          camera={{ position: [0, 1, 4], fov: 50 }}
        >
        {/* Dark ambient light */}
        <ambientLight intensity={0.15} color="#111111" />

        {/* Blue highlight lights */}
        <directionalLight position={[3, 5, 5]} intensity={0.7} color="#00aaff" />
        <pointLight position={[-3, 2, -3]} intensity={0.5} color="#003366" />

        {/* Stage gives soft shadows and environment */}
        <Stage environment="city" intensity={0.2} adjustCamera>
          <LaptopModel mouse={mouse} />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
