"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Text, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

function InteractiveElements({ onNavigate }) {
  const { camera } = useThree();
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    { text: "Projects", position: [3, 2, 0], color: "#22c55e" },
    { text: "Skills", position: [-3, 2, 0], color: "#3b82f6" },
    { text: "About", position: [0, 3, 2], color: "#ec4899" },
  ];

  return buttons.map((button, index) => (
    <group key={button.text} position={button.position}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh
          onPointerOver={() => setHoveredButton(index)}
          onPointerOut={() => setHoveredButton(null)}
          onClick={() => onNavigate(button.text.toLowerCase())}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={button.color}
            metalness={0.8}
            roughness={0.2}
            emissive={hoveredButton === index ? button.color : "#000000"}
            emissiveIntensity={hoveredButton === index ? 0.5 : 0}
          />
        </mesh>
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {button.text}
        </Text>
      </Float>
    </group>
  ));
}

function AnimatedGeometry() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial
            color="#7C3AED"
            roughness={0.3}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

export function HomeScene({ onNavigate }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'all',
        background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)'
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedGeometry />
      <InteractiveElements onNavigate={onNavigate} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
} 