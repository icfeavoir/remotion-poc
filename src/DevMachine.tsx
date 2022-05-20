import { Audio, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLOR_WHITE } from './DevMachine/constants';

import { Logo } from './DevMachine/Logo/Logo';
import { DartBoum } from './DevMachine/DartBoum';
import { Photos } from './DevMachine/Photos';

import mainMusic from './assets/shining_light.mp3'

import { PhotoItem } from './DevMachine/types';

// images
import photo1 from './assets/resto.jpg';
import photo2 from './assets/sushi.jpg';
import photo3 from './assets/marc_beer.jpg';
import photo4 from './assets/group.jpg';
import photo5 from './assets/group_face.jpg';

export const DevMachine: React.FC = () => {
	const { width, height } = useVideoConfig();

	const DART_FROM = 490;

	const PHOTOS_1: PhotoItem[] = [
		{ src: photo1, zooms: [1, 1.2], zoomProperty: 'height', zoomBase: height },
    { src: photo2, zooms: [1.3, 1], zoomProperty: 'width', zoomBase: width },
    { src: photo3, zooms: [1.2, 1.5], zoomProperty: 'width', zoomBase: width },
    { src: photo4, zooms: [1, 1], zoomProperty: 'width', zoomBase: width },
  ]
	
	const PHOTOS_2_FROM = DART_FROM + 180;
	
	const PHOTOS_2: PhotoItem[] = [
    { src: photo5, zooms: [1, 1], zoomProperty: 'width', zoomBase: width },
  ]
	
	const musicEndingFn = (f: number) => interpolate(f, [0, 15, 180, 220], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div style={{
			flex: 1,
			backgroundColor: COLOR_WHITE,
		}}>
			<Sequence name="empty" from={0} durationInFrames={10}>
				<></>
			</Sequence>

			<Sequence name="logo-1" from={10} durationInFrames={120}>
				<Logo leave />
			</Sequence>

			<Sequence name="photos" from={130} durationInFrames={360}>
				<Photos photos={PHOTOS_1} />
			</Sequence>

			<Sequence name="dart-boom" from={DART_FROM} durationInFrames={180}>
				<DartBoum />
			</Sequence>

			<Sequence name="final-photo" from={PHOTOS_2_FROM} durationInFrames={90}>
				<Photos photos={PHOTOS_2} />
			</Sequence>

			<Sequence name="logo-2" from={PHOTOS_2_FROM + 90} durationInFrames={100}>
				<Logo leave={false} />
			</Sequence>

			{/* MUSIC */}
			<Sequence name="music-1" from={0} durationInFrames={DART_FROM}>
				<Audio src={mainMusic} />
			</Sequence>

			<Sequence name="music-2" from={PHOTOS_2_FROM}>
				<Audio
					src={mainMusic}
					volume={(f) => musicEndingFn(f)}
					startFrom={970}
				/>
			</Sequence>
		</div>
	);
};
