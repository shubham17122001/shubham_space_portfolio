"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function HolographicEarth() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.z = 0.2;
    }
  });

  return (
    <group>
      {/* Core sphere */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#0b1e42"
          attach="material"
          distort={0.05}
          speed={1.5}
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>
      
      {/* Wireframe overlay for tech look */}
      <Sphere args={[1.52, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[1.6, 32, 32]}>
        <meshBasicMaterial
          color="#1e40af"
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

export default function EarthModel() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] md:h-[800px] max-w-4xl z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-2, -2, -5]} intensity={0.5} color="#3b82f6" />
        <HolographicEarth />
      </Canvas>
    </div>
  );
}
