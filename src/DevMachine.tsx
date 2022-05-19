import { Sequence, useCurrentFrame,
	useVideoConfig } from 'remotion';
import {DevMachineText} from './DevMachine/DevMachineText'

export const DevMachine: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	return (
		<div style={{
			flex: 1,
			display: 'flex',
			backgroundColor: 'white',
			textAlign: 'center',
			alignItems: 'center',
			justifyContent: 'center',
		}}>			
			{/* 0 seconds */}
			{/* <Sequence from={0}> */}
				<DevMachineText />
			{/* </Sequence> */}
			{/* 2 seconds */}
			{/* <Sequence from={60}> */}
				{/* LAYERS (before) */}
			{/* </Sequence> */}
			{/* 4 seconds */}
			{/* <Sequence from={120}> */}
				{/* Dart + BOUM */}
			{/* </Sequence> */}
		</div>
	);
};
