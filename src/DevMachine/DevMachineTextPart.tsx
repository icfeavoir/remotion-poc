import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const DevMachineTextPart: React.FC<{ text: string, color: string }> = ({ text, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring: gives natural animation (physical)
  const driver = spring({ frame, fps });
  // Interpolate: maps animation from frame to position
  // const opacity = frame > 20 ? 1 : frame / 20;
  const scale = interpolate(driver, [0, 20], [0, 1000], {
    extrapolateRight: "identity",
  });

  return (
    <span style={{
      color,
      fontSize: scale
    }}>{text}</span>
  );
};