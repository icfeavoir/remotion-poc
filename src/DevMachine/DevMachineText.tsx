import {Easing} from 'remotion'
import {interpolate, spring, useVideoConfig} from 'remotion'
import {useCurrentFrame} from 'remotion'
import { COLOR_BLUE, COLOR_RED } from "./constants";
import { DevMachineTextPart } from "./DevMachineTextPart";

export const DevMachineText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const texts = [
    { text:"D", color: COLOR_RED, delay: 0 },
    { text:"E", color: COLOR_RED, delay: 3 },
    { text:"V", color: COLOR_RED, delay: 6 },
    { text:"machine", color: COLOR_BLUE, delay: 18 },
  ]

  // keep text 2 seconds
  const REMOVE_AFTER_FRAMES = 2 * fps;
  const marginLeft = interpolate(frame - REMOVE_AFTER_FRAMES, [0, 30], [0, 1300], {
    easing: Easing.bezier(.65,-0.59,.74,1.18),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{
      flex: 1,
      fontSize: 200,
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: `${marginLeft}px`,
    }} >
      {
        texts.map(({ text, color, delay }) => (
          <DevMachineTextPart text={text} color={color} delay={delay} />
        ))
      }
    </div>
  );
};
