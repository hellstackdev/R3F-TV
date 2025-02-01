import { Circle } from "@react-three/drei";

export const Floor = (props: JSX.IntrinsicElements["group"]) => {
  return (
    <group {...props}>
      <Circle
        args={[2, 16]}
        castShadow
        receiveShadow
        scale={10}
        rotation-x={-Math.PI / 2}
        position-y={0.01}
      >
        <meshPhysicalMaterial color="#333" />
      </Circle>
    </group>
  );
};
