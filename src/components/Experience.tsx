import { SoftShadows } from "@react-three/drei";
import { RioShelf } from "./RioShelf";
import { Studio } from "./Studio";
import { Tv } from "./Tv";

export const Experience = () => {
  return (
    <>
      <Studio />
      {/* <CameraManager /> */}
      <SoftShadows />
      <Tv position={[0, 0.39, 0]} />
      <RioShelf />
    </>
  );
};
