import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function LaptopModel({
  accent = "#5eead4",
  mouse,
  position = [0, -0.45, 0],
  scale = 2.35,
}) {
  const group = useRef();
  const modelUrl = `${import.meta.env.BASE_URL}models/laptop.glb`;
  const { scene } = useGLTF(modelUrl);

  const preparedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material = child.material.clone();
      }

      const name = child.name.toLowerCase();
      if (name.includes("screen") && child.material) {
        child.material.emissive = new THREE.Color(accent);
        child.material.emissiveIntensity = 1.65;
        child.material.color = new THREE.Color("#071014");
      }
    });
    return clone;
  }, [accent, scene]);

  useFrame((state) => {
    if (!group.current) return;
    const mouseTarget = mouse?.current ?? { x: 0, y: 0 };
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouseTarget.x * 0.42,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouseTarget.y * 0.24,
      0.05
    );
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
  });

  return <primitive ref={group} object={preparedScene} position={position} scale={scale} />;
}

export default function ThreeLaptop() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="h-full w-full cursor-grab active:cursor-grabbing" onMouseMove={handleMouseMove}>
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.9, 4.6], fov: 48 }}
      >
        <ambientLight intensity={0.22} color="#dffcff" />

        <directionalLight position={[3, 5, 5]} intensity={0.82} color="#5eead4" />
        <pointLight position={[-3, 2.5, -3]} intensity={0.7} color="#fbbf24" />
        <pointLight position={[2, -1.5, 2]} intensity={0.45} color="#38bdf8" />

        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.28} adjustCamera={false}>
            <LaptopModel mouse={mouse} />
          </Stage>
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0.75} maxPolarAngle={1.9} />
      </Canvas>
    </div>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/laptop.glb`);
