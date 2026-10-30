import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

function Orb() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12;
      mesh.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial color="#5b8cff" roughness={0.18} metalness={0.25} distort={0.36} speed={2.2} />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-wrap" aria-label="Decorative animated 3D blue orb">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.7]}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-4, -2, 2]} intensity={18} color="#a9c5ff" />
        <Orb />
        <Sparkles count={65} scale={5.5} size={2.2} speed={0.35} color="#7da6ff" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
      <div className="scene-glow" />
    </div>
  );
}
