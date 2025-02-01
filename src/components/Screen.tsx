import { useVideoTexture } from "@react-three/drei";
import { Suspense } from "react";
import { Color, DoubleSide, RepeatWrapping } from "three";

interface ScreenProps {
  src: string;
}

export const Screen = ({ src }: ScreenProps) => {
  return (
    <Suspense fallback={<meshStandardMaterial color={"black"} />}>
      <VideoMaterial src={src} />
    </Suspense>
  );
};

function VideoMaterial({
  src,
  setVideo,
}: {
  src?: string;
  setVideo?: (video: HTMLVideoElement) => void;
}) {
  const emissiveColor = new Color(0xffffff);
  const texture = useVideoTexture(src ?? null, { hls: { enableWorker: true } });
  texture.flipY = false;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1;
  texture.offset.x = 1;

  setVideo?.(texture.image);

  return (
    <meshStandardMaterial
      side={DoubleSide}
      map={texture}
      toneMapped={false}
      transparent
      opacity={0.9}
      emissiveMap={texture}
      //emissiveIntensity={2}
      emissive={emissiveColor}
    />
  );
}
