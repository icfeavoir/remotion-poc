import { Audio, interpolate, Sequence, useVideoConfig } from 'remotion';

import { Logo } from './DevMachine/Logo/Logo';
import { Dart } from './DevMachine/Dart';
import { Photos } from './DevMachine/Photos';

import mainMusic from './assets/shining_light.mp3'

import { PhotoItem } from './DevMachine/types';

// images
import photo1 from './assets/resto.jpg';
import photo2 from './assets/sushi.jpg';
import photo3 from './assets/marc_beer.jpg';
import photo4 from './assets/group.jpg';
import photo5 from './assets/group_face.jpg';
import { COLOR_BLACK } from './DevMachine/constants';

export const DevMachine: React.FC = () => {
	const { width, height } = useVideoConfig();

	const PHOTOS_1: PhotoItem[] = [
		{ src: photo1, zooms: [1, 1.2], zoomProperty: 'height', zoomBase: height },
    { src: photo2, zooms: [1.3, 1], zoomProperty: 'width', zoomBase: width },
    { src: photo3, zooms: [1.2, 1.5], zoomProperty: 'width', zoomBase: width },
    { src: photo4, zooms: [1, 1], zoomProperty: 'width', zoomBase: width },
  ]
	
	const PHOTOS_2: PhotoItem[] = [
    { src: photo5, zooms: [1, 1], zoomProperty: 'width', zoomBase: width },
  ]
	
	const musicEndingFn = (f: number) => interpolate(f, [0, 15, 180, 220], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const SEQUENCE_EMPTY = { from: 0, duration: 10 };
	const SEQUENCE_LOGO_1 = { from: SEQUENCE_EMPTY.from + SEQUENCE_EMPTY.duration, duration: 150 };
	const SEQUENCE_PHOTOS_1 = { from: SEQUENCE_LOGO_1.from + SEQUENCE_LOGO_1.duration, duration: 360 };
	const SEQUENCE_DART = { from: SEQUENCE_PHOTOS_1.from + SEQUENCE_PHOTOS_1.duration, duration: 180 };
	const SEQUENCE_PHOTOS_2 = { from: SEQUENCE_DART.from + SEQUENCE_DART.duration, duration: 90 };
	const SEQUENCE_LOGO_2 = { from: SEQUENCE_PHOTOS_2.from + SEQUENCE_PHOTOS_2.duration, duration: 150 };

	const SEQUENCES = [SEQUENCE_EMPTY,
		SEQUENCE_LOGO_1,
		SEQUENCE_PHOTOS_1,
		SEQUENCE_DART,
		SEQUENCE_PHOTOS_2,
		SEQUENCE_LOGO_2,
	];

	const TOTAL_DURATION = SEQUENCES.reduce((acc, seq) => acc + seq.duration, 0);
	console.log(TOTAL_DURATION)

	return (
		<div style={{ flex: 1, backgroundColor: COLOR_BLACK	}}>
			<Sequence name="empty" from={SEQUENCE_EMPTY.from} durationInFrames={SEQUENCE_EMPTY.duration}>
				<></>
			</Sequence>

			<Sequence name="logo-1" from={SEQUENCE_LOGO_1.from} durationInFrames={SEQUENCE_LOGO_1.duration}>
				<Logo leave />
			</Sequence>

			<Sequence name="photos" from={SEQUENCE_PHOTOS_1.from} durationInFrames={SEQUENCE_PHOTOS_1.duration}>
				<Photos photos={PHOTOS_1} />
			</Sequence>

			<Sequence name="dart-boom" from={SEQUENCE_DART.from} durationInFrames={SEQUENCE_DART.duration}>
				<Dart />
			</Sequence>

			<Sequence name="final-photo" from={SEQUENCE_PHOTOS_2.from} durationInFrames={SEQUENCE_PHOTOS_2.duration}>
				<Photos photos={PHOTOS_2} />
			</Sequence>

			<Sequence name="logo-2" from={SEQUENCE_LOGO_2.from} durationInFrames={SEQUENCE_LOGO_2.duration}>
				<Logo leave={false} />
			</Sequence>

			{/* MUSIC */}
			<Sequence name="music-1" from={0} durationInFrames={SEQUENCE_DART.from}>
				<Audio src={mainMusic} />
			</Sequence>

			<Sequence name="music-2" from={SEQUENCE_PHOTOS_2.from}>
				<Audio
					src={mainMusic}
					volume={(f) => musicEndingFn(f)}
					startFrom={970}
				/>
			</Sequence>
		</div>
	);
};
