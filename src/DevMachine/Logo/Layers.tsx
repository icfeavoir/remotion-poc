import { COLOR_BLUE, COLOR_RED, COLOR_WHITE } from "../constants"
import { Layer } from "./Layer"

export const Layers: React.FC = () => {

  return (
    <div style={{
      width: '100%',
      height: '100%',
    }}>
      <Layer backgroundColor={COLOR_RED} />
      <Layer backgroundColor={COLOR_BLUE } delay={4} />
      <Layer backgroundColor={COLOR_WHITE } delay={10} />
    </div>
  )
}