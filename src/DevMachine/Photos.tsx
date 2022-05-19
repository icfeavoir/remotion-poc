import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

// images
import photo1 from '../assets/resto.jpg';
import photo2 from '../assets/sushi.jpg';
import photo3 from '../assets/marc_beer.jpg';
import photo4 from '../assets/group.jpg';
import { CSSProperties } from 'react';

export const Photos: React.FC = () => { 
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  
  const PHOTOS = [
    { src: photo1, zooms: [1, 1.2], zoomProperty: 'height', zoomBase: height },
    { src: photo2, zooms: [1.3, 1], zoomProperty: 'width', zoomBase: width },
    { src: photo3, zooms: [1.2, 1.5], zoomProperty: 'width', zoomBase: width },
    { src: photo4, zooms: [1, 1], zoomProperty: 'width', zoomBase: width },
  ];

  const OPACITY_DURACTION_FPS = 10;
  const PHOTO_DURATION_FPS = 90;
  const PHOTO_DURATION_FULL_FPS = PHOTO_DURATION_FPS - 2 * OPACITY_DURACTION_FPS;

  const metadata = PHOTOS.map(({ zooms }, i) => {
    const start = i * PHOTO_DURATION_FPS;
    const visible = start + OPACITY_DURACTION_FPS;
    const invisible = visible + PHOTO_DURATION_FULL_FPS;
    const end = invisible + OPACITY_DURACTION_FPS;

    const opacity = interpolate(frame, [start, visible, invisible, end], [0, 1, 1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

    const photoZoom = interpolate(frame, [start, end], zooms, {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })

    return {
      opacity,
      zoom: photoZoom
    };
  })

  return (
    <AbsoluteFill style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {
        PHOTOS.map(({ src, zoomProperty, zoomBase }, i) => {
          const {zoom} = metadata[i];
          const {opacity} = metadata[i];
          const display = opacity > 0 ? '' : 'none';
          return (
            <Img
              key={i}
              src={src}
              style={{
                display,
                opacity,
                [zoomProperty]: `${zoom * zoomBase}px`,
              }}
            />
          )
        })
      }
    </AbsoluteFill>
  )
}