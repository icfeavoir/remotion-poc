import { AbsoluteFill, Img, interpolate, useCurrentFrame } from 'remotion';


export const Photos: React.FC<{photos?: Array<any>}> = ({ photos = []}) => { 
  const frame = useCurrentFrame();
  
  const OPACITY_DURACTION_FPS = 10;
  const PHOTO_DURATION_FPS = 90;
  const PHOTO_DURATION_FULL_FPS = PHOTO_DURATION_FPS - 2 * OPACITY_DURACTION_FPS;

  const metadata = photos.map(({ zooms }, i) => {
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
        photos.map(({ src, zoomProperty, zoomBase }, i) => {
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