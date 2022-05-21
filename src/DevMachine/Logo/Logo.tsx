import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion"
import { DevMachineText } from "./DevMachineText"
import { Layers } from "./Layers"

export const Logo: React.FC<{leave?: boolean}> = ({leave = false}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const LOGO_DURATION_FPS = 5 * fps;
  // set black bg transition
  const opacity = interpolate(frame, [0, 120, 150], [1, 1, 0]);

  return (
    <AbsoluteFill style={{ opacity }}>
      <Sequence from={0} durationInFrames={LOGO_DURATION_FPS}>
          <Layers />
        </Sequence>
      <Sequence from={30} durationInFrames={90}>
        <DevMachineText leave={leave} />
      </Sequence>
    </AbsoluteFill>
  )
}