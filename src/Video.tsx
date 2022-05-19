import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';
import { DevMachine } from './DevMachine'

export const RemotionVideo: React.FC = () => {
	const FPS = 30;
	const DURATION_IN_SECONDS = 10;
	// const DURATION_IN_SECONDS = 1;
	
	return (
		<>
			<Composition
				id="dev-machine"
				component={DevMachine}
				durationInFrames={FPS * DURATION_IN_SECONDS}
				fps={FPS}
				width={1920}
				height={1080}
			/>
			{/* <Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/> */}
			{/* <Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/> */}
			{/* <Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/> */}
			{/* <Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/> */}
		</>
	);
};
