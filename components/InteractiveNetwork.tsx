"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const nodeData: { label: string; position: [number, number, number] }[] = [
  { label: "Computer Science", position: [-2, 0, 0] },
  { label: "Human Sensing", position: [0, -2, -3] },
  { label: "Neuroscience", position: [2, 0, 0] },
  { label: "Cognitive Science", position: [-3, 1, -2] },
  { label: "Social Psychology", position: [1, 2, -1] },
  { label: "Nutritional Science", position: [-2, -2, 1] },
  { label: "Psychiatry", position: [2, 1, 2] },
  { label: "Robotics", position: [0, 3, -2] },
];

function SphereNode({ label, position }: { label: string; position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (ref.current) {
      if (hovered) {
        ref.current.rotation.x = Math.sin(Date.now() * 0.005) * 0.2;
        ref.current.rotation.y = Math.sin(Date.now() * 0.003) * 0.2;
      } else {
        ref.current.rotation.x *= 0.9;
        ref.current.rotation.y *= 0.9;
      }
    }
  });

  const labelY = -0.6;

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial roughness={0.1} emissive="#404057" />
      </mesh>

      {/* Line from sphere center to label */}
      <Line points={[[0, 0, 0], [0, labelY, 0]]} color="white" lineWidth={1} />

      {/* Label in 3D space */}
      <Html position={[0, labelY, 0]} distanceFactor={12}>
        <div className="text-xs text-white text-center">{label}</div>
      </Html>
    </group>
  );
}

function CentralSphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" emissive="indianred" />
      <Html distanceFactor={10}>
        <div className="text-sm font-semibold text-white text-center">
          Construction Engineering
        </div>
      </Html>
    </mesh>
  );
}

function Connections() {
  return (
    <>
      {nodeData.map((item, i) => (
        <Line key={i} points={[[0, 0, 0], item.position]} color="white" lineWidth={1} />
      ))}
    </>
  );
}

function Content() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.002;
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralSphere />
      <Connections />
      {nodeData.map((item, index) => (
        <SphereNode key={index} label={item.label} position={item.position} />
      ))}
    </group>
  );
}

export default function InteractiveNetwork() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, -10]} color="orange" />
      <pointLight position={[-10, -10, 10]} color="lightblue" />
      <Content />
    </Canvas>
  );
}
