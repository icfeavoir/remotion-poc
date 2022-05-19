import { Sequence } from 'remotion';
import { COLOR_WHITE } from './DevMachine/constants';
import {DevMachineText} from './DevMachine/DevMachineText'
import { Layers } from './DevMachine/Layers';

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
			{/* 4 seconds */}
			{/* <Sequence from={120}> */}
				{/* Dart + BOUM */}
			{/* </Sequence> */}
		</div>
	);
};
