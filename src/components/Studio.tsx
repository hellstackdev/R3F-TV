import { Environment, OrbitControls } from "@react-three/drei";
import { Floor } from "./Floor";

export const Studio = () => {
  return (
    <>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <OrbitControls
        minDistance={1}
        maxDistance={7.5}
        //autoRotate
        //autoRotateSpeed={-0.9}
        zoomToCursor={true}
        target={[0, 0.5, 0]}
        minPolarAngle={1.3}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <directionalLight
        position={[-0.9, 2, 2.5]}
        castShadow
        shadow-mapSize={[256, 256]}
        shadow-camera-far={25}
        intensity={10}
        shadow-bias={-0.0001}
        shadow-camera-left={-5}
      >
        <orthographicCamera attach="shadow-camera" />
      </directionalLight>
      <Environment preset="night" environmentIntensity={0.8} />
      <Floor />
    </>
  );
};
