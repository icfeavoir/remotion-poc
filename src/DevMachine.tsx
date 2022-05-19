import { Audio, Sequence } from 'remotion';
import { COLOR_WHITE } from './DevMachine/constants';
import { DartBoum } from './DevMachine/DartBoum';
import {DevMachineText} from './DevMachine/DevMachineText'
import { Layers } from './DevMachine/Layers';

import music from './assets/shining_light.mp3'
import { Photos } from './DevMachine/Photos';

export const DevMachine: React.FC = () => {
	return (
		<div style={{
			flex: 1,
			backgroundColor: COLOR_WHITE,
		}}>			
			<Sequence name="empty" from={0} durationInFrames={10}>
				<div />
			</Sequence>
			
			<Sequence name='layers' from={10} durationInFrames={20}>
				<Layers />
			</Sequence>
			
			<Sequence name="dev-machine-text" from={30} durationInFrames={90} layout="none">
				<DevMachineText />
			</Sequence>

			<Sequence name="dart-boom" from={118} durationInFrames={58}>
				<DartBoum />
			</Sequence>

			<Sequence name="photos" from={174} durationInFrames={360}>
				<Photos />
			</Sequence>

			{/* TODO: group layers + dm text */}
			<Sequence name='layers' from={534} durationInFrames={20}>
				<Layers />
			</Sequence>

			<Sequence name="dev-machine-text" from={554} durationInFrames={90} layout="none">
				<DevMachineText leave={false} />
			</Sequence>

			{/* MUSIC */}
			<Audio
				src={music}
				volume={0}
				// volume={0.8}
			/>
		</div>
	);
};
