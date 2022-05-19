import {Audio} from 'remotion'
import { useCurrentFrame } from 'remotion'
import { interpolate, useVideoConfig } from 'remotion'
import { AbsoluteFill, Video } from 'remotion';

// videos
import dartVideo from '../assets/dart.mp4';
// music
import lakme from '../assets/lakme.mp3'

export const DartBoum: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const START_AT_FPS = 6 * fps;
  const END_AT_FPS = START_AT_FPS + 180;

  const TARGET_TOUCHED_AT_FPS = START_AT_FPS + 104;

  const dartZoom = interpolate(frame, [0, TARGET_TOUCHED_AT_FPS/6, TARGET_TOUCHED_AT_FPS], [110, 110, 300])


  return (
    <>
      <AbsoluteFill>
        <Video
          src={dartVideo}
          startFrom={START_AT_FPS}
          endAt={END_AT_FPS}
          volume={0}
          style={{
            width: `${dartZoom}%`,
            position: 'absolute',
          }}
        />
      </AbsoluteFill>
      
			<Audio
				src={lakme}
				volume={0.8}
        startFrom={30}
			/>
    </>
  );
};