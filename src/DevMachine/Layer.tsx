import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Layer: React.FC<{ backgroundColor: string, delay?: number }> = ({ backgroundColor, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  
  const DURATION = Number(fps); // 1 second

  // Animation starts at frame 0 so minus a delay to start it later
  // Duration / 2 because we go to height * 2
  const customHeight = interpolate(frame - delay, [0, DURATION / 2], [0, height * 2], {
    easing: Easing.bezier(.42, 0, .58, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: 'absolute' }}>
      <svg
        width={width}
        height={customHeight}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <filter id="shadow" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="8" stdDeviation="2" floodOpacity="0.5"/>
        </filter>

        <g filter="url(#shadow)">
          <path
            fill={backgroundColor}
            d="M 0,0
              L 0,80
              Q 50,100 100,80
              L 100,0
              Z" />
        </g>
      </svg>
    </div>
  )
};