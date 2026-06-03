import React, { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { LaptopModel } from "./ThreeLaptop";

const labModes = [
  {
    id: "model",
    label: "GLTF Model",
    accent: "#5eead4",
    copy: "A loaded laptop asset with cloned materials, emissive screen treatment, and pointer-driven motion.",
  },
  {
    id: "particles",
    label: "Particles",
    accent: "#38bdf8",
    copy: "A procedural field built from buffer geometry, tuned for motion without layout shift.",
  },
  {
    id: "lighting",
    label: "Lighting",
    accent: "#fbbf24",
    copy: "Directional, point, and ambient lights balanced to make the scene readable on dark UI.",
  },
];

const metrics = [
  { value: "3D", label: "GLB asset pipeline" },
  { value: "R3F", label: "React Three Fiber" },
  { value: "60fps", label: "motion target" },
  { value: "A11y", label: "reduced motion aware" },
];

const nodePositions = [
  [-2.15, 1.05, -0.45],
  [-1.2, -0.85, 0.2],
  [1.35, 1.2, 0.3],
  [2.1, -0.55, -0.35],
  [0.05, 1.75, -0.95],
  [0.85, -1.55, 0.6],
];

function createParticleField(count = 850) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const stride = i * 3;
    const t = i / count;
    const angle = i * 2.399963229728653;
    const radius = 0.65 + Math.sqrt(t) * 3.6;
    positions[stride] = Math.cos(angle) * radius;
    positions[stride + 1] = (Math.sin(i * 0.19) * 1.15) + (Math.random() - 0.5) * 0.4;
    positions[stride + 2] = Math.sin(angle) * radius * 0.72;
  }
  return positions;
}

function ParticleField({ color, paused }) {
  const ref = useRef();
  const positions = useMemo(() => createParticleField(), []);

  useFrame((state) => {
    if (!ref.current || paused) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.055;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        depthWrite={false}
        opacity={0.72}
        size={0.028}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

function OrbitSystem({ color, paused }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current || paused) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.24) * 0.2;
  });

  return (
    <group ref={group}>
      {[1.9, 2.35, 2.85].map((radius, index) => (
        <mesh
          key={radius}
          rotation={[Math.PI / 2, index * 0.35, index * 0.2]}
          scale={[1, 0.78 + index * 0.08, 1]}
        >
          <torusGeometry args={[radius, 0.007, 12, 160]} />
          <meshBasicMaterial color={color} opacity={0.18 + index * 0.08} transparent />
        </mesh>
      ))}
    </group>
  );
}

function DataNodes({ color, mode }) {
  const materialColor = mode === "lighting" ? "#fbbf24" : color;

  return (
    <group>
      {nodePositions.map((position) => (
        <mesh key={position.join(",")} position={position}>
          <sphereGeometry args={[0.055, 18, 18]} />
          <meshStandardMaterial color={materialColor} emissive={materialColor} emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function LabCanvas({ mode, paused }) {
  const mouse = useRef({ x: 0, y: 0 });
  const activeMode = labModes.find((item) => item.id === mode) ?? labModes[0];

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouse.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    mouse.current.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  return (
    <div
      className="relative h-[460px] overflow-hidden lg:h-[620px]"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 1.15, 5.35], fov: 45 }}
      >
        <ambientLight intensity={mode === "lighting" ? 0.42 : 0.28} color="#e8fffb" />
        <directionalLight position={[3, 5, 4]} intensity={mode === "lighting" ? 1.15 : 0.78} color={activeMode.accent} />
        <pointLight position={[-3, 1.6, -2.4]} intensity={0.85} color="#38bdf8" />
        <pointLight position={[2.6, -1.8, 2]} intensity={0.55} color="#fbbf24" />

        <Suspense fallback={null}>
          <group position={[0, -0.2, 0]}>
            <LaptopModel accent={activeMode.accent} mouse={mouse} position={[0, -0.65, 0]} scale={1.75} />
            <OrbitSystem color={activeMode.accent} paused={paused} />
            <ParticleField color={activeMode.accent} paused={paused || mode === "model"} />
            <DataNodes color={activeMode.accent} mode={mode} />
          </group>
        </Suspense>

        <OrbitControls
          autoRotate={!paused}
          autoRotateSpeed={0.45}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={1.85}
          minPolarAngle={0.78}
        />
      </Canvas>
      <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 backdrop-blur-md">
        {activeMode.label}
      </div>
    </div>
  );
}

export default function ThreeShowcase() {
  const [mode, setMode] = useState("model");
  const [paused, setPaused] = useState(false);
  const activeMode = labModes.find((item) => item.id === mode) ?? labModes[0];

  return (
    <section id="three-lab" className="py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h2 className="section-title">Three.js, shown as a working surface.</h2>
            <p className="section-copy mt-5">
              This portfolio now uses a dedicated 3D scene to show the skills behind the visual:
              asset loading, material tuning, procedural geometry, lighting, interaction, and responsive rendering.
            </p>

            <div className="mt-8 grid gap-3">
              {labModes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`rounded-lg border px-4 py-4 text-left transition ${
                    mode === item.id
                      ? "border-teal-300/60 bg-teal-300/10"
                      : "border-white/10 bg-white/[0.045] hover:border-white/25 hover:bg-white/[0.075]"
                  }`}
                  onClick={() => setMode(item.id)}
                >
                  <span className="block text-base font-black text-white">{item.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-300">{item.copy}</span>
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" className="btn-secondary" onClick={() => setPaused((value) => !value)}>
                {paused ? "Resume Motion" : "Pause Motion"}
              </button>
              <a href="#projects" className="btn-primary">
                See Case Studies
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                  <span className="block text-xl font-black text-white">{metric.value}</span>
                  <span className="mt-1 block text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-400">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <LabCanvas mode={activeMode.id} paused={paused} />
          </div>
        </div>
      </div>
    </section>
  );
}
