import {Easing} from 'remotion'
import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion'
import { AbsoluteFill } from "remotion";

export const Opacity: React.FC<{ text: string }> = ({ text }) => {

  const frame = useCurrentFrame();
  // const { fps } = useVideoConfig();

  // STEP 0: fixed opacity
  const customOpacity = 1;

  // STEP 1: opacity
  // const customOpacity = interpolate(frame, [0, 30, 60, 90], [0, 1, 1, 0]);
  
  // STEP 2: add font size
  // const customFontSize = interpolate(frame, [0, 30], [0, 200]);

  // STEP 3: fix font size with extrapolateRight
  // const customFontSize = interpolate(frame, [0, 30], [0, 200], {
  //   extrapolateRight: 'clamp',
  // });

  // STEP 4: start font size later
  // const FONT_SIZE_AFTER_SECONDS = 1;
  // const FONT_SIZE_AFTER_FPS = FONT_SIZE_AFTER_SECONDS * fps; // 30 fps
  // const customFontSize = interpolate(frame - FONT_SIZE_AFTER_FPS, [0, 30], [50, 200], {
  //   extrapolateLeft: 'clamp',
  //   extrapolateRight: 'clamp',
  //   // STEP 5: easing
  //   // easing: Easing.bezier(.38,-0.57,.57,1.7),
  // });



  return (
    <Sequence from={0} durationInFrames={90}>
      <AbsoluteFill
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <p style={{ fontSize: '100px', color: 'white' }}>frame { frame }</p>

        <p style={{ 
          opacity: customOpacity,
          fontSize: '200px',
          // fontSize: `${customFontSize}px`,
          color: 'white',
        }}>{text}</p>
      </AbsoluteFill>
    </Sequence>
  );
};
