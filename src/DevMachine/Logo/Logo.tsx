import { Sequence } from "remotion"
import { DevMachineText } from "./DevMachineText"
import { Layers } from "./Layers"

export const Logo: React.FC<{leave?: boolean}> = ({leave = false}) => {
  return (
    <>
     <Sequence from={0} durationInFrames={30}>
        <Layers />
      </Sequence>
     <Sequence from={30} durationInFrames={90}>
      <DevMachineText leave={leave} />
     </Sequence>
    </>
  )
}