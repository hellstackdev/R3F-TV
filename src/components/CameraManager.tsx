import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export const CameraManager = () => {
  const tl = gsap.timeline();
  const { camera } = useThree((state) => state);

  //const controls = get().controls as OrbitControls | null;

  useGSAP(() => {
    tl.fromTo(
      camera.position,
      { x: 0, y: 0.5, z: 5 },
      {
        x: 0,
        y: 1.9,
        z: 2.5,
        duration: 2.5,
        ease: "power2.inOut",
      }
    ).to(
      camera.rotation,
      {
        x: 2.15,
        y: 0,
        z: 0,
        duration: 2.5,
        ease: "power1.inOut",
      },
      "<"
    );
    /* tl.to(camera.position, {
      x: 0,
      y: 0.5,
      z: 2.5,
      delay: 5,
      duration: 2.5,
      ease: "power1.inOut",
      onComplete: () => {
        //camera.lookAt(0, 5.5, 0);
        store.loading = false;
      },
    }).to(
      camera.rotation,
      {
        x: -0.15,
        y: 0,
        z: 0,
        duration: 2.5,
        ease: "power1.inOut",
        onStart: () => {
          //camera.lookAt(0, 5.5, 0);
          store.loading = false;
        },
        onComplete: () => {
          if (controls) {
            controls.enableZoom = true;
            controls.enablePan = true;
            controls.enableRotate = true;
          }
          store.loading = false;
        },
      },
      "<"
    ); */
  }, [camera, tl]);

  return null;
};
