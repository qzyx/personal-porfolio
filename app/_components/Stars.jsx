import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export default function MovingStars({ count = 500 }) {
  const meshRef = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10; // Spread in 3D space
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (meshRef.current) {
      for (let i = 0; i < count; i++) {
        meshRef.current.geometry.attributes.position.array[i * 3 + 2] += 0.002; // Move stars in Z direction
        if (meshRef.current.geometry.attributes.position.array[i * 3 + 2] > 5) {
          meshRef.current.geometry.attributes.position.array[i * 3 + 2] = -5; // Reset position
        }
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.002} color="white" />
    </points>
  );
}
