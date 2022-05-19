import { interpolate, useCurrentFrame } from "remotion";

export const DevMachineTextPart: React.FC<{ text: string, color: string, delay: number }> = ({ text, color, delay }) => {
  const frame = useCurrentFrame();

  const rotateX = interpolate(frame - delay, [0, 10], [-90, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const css = `
    .spinner {
      animation-timing-function: ease-in-out;
      transform-origin: 60px 60px 0;
      margin: 0 10px;
    }
  `;

  return (
    <div className="spinner" style={{
      transform: `rotateX(${rotateX}deg)`,
    }}>
      <style>
        {css}
      </style>
      <p style={{ margin: 0, color }}>{text}</p>
    </div>
  );
};