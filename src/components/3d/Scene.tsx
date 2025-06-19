"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#7C3AED"
          roughness={0.5}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
} 