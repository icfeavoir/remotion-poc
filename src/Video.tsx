import {Folder, IFrame, Still} from 'remotion'
import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import { DevMachine } from './DevMachine'
import { StillImage } from './DevMachine/examples/StillImage';
import { Opacity } from './DevMachine/examples/Opacity';

export const RemotionVideo: React.FC = () => {
	const FPS = 30;
	const DURATION_IN_SECONDS = 32;
	
	return (
		<>
			<Folder name="DevMachine" >
				<Composition
					id="dev-machine"
					component={DevMachine}
					durationInFrames={FPS * DURATION_IN_SECONDS}
					fps={FPS}
					width={1920}
					height={1080}
				/>
			</Folder>

			<Folder name="examples">
				<Composition
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
				/>
				
				<Composition
					id="opacity"
					component={Opacity}
					durationInFrames={100}
					fps={30}
					width={1920}
					height={1080}
					defaultProps={{
						text: 'Hello World',
					}}
				/>

				<Still
					id="image"
					component={StillImage}
					width={1920}
					height={1080}
				/>
			</Folder>
		</>
	);
};
