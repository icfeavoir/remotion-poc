import {useCurrentFrame} from 'remotion'
import {interpolate, useVideoConfig} from 'remotion'
import { AbsoluteFill, Video } from 'remotion';

// videos
import dartVideo from '../assets/dart.mp4';
import explosionVideo from '../assets/explosion.mp4'

export const DartBoum: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const START_AT_FPS = 8 * fps;
  const END_AT_FPS = START_AT_FPS + 60;

  const TARGET_TOUCHED_AT_FPS = START_AT_FPS + 44;

  const dartZoom = interpolate(frame, [0, TARGET_TOUCHED_AT_FPS], [150, 300])


  return (
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

      {/* <Video
        src={explosionVideo}
        endAt={30}
        volume={0}
        width="120%"
        style={{
          position: 'absolute',
        }}
      /> */}
    </AbsoluteFill>
  );
};