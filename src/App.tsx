import { Experience } from "@/components/Experience";
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}

function App() {
  return (
    <Canvas
      shadows
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 2.5], fov: 50 }}
    >
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default App;
