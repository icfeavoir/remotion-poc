import { COLOR_BLUE, COLOR_RED } from "./constants";
import { DevMachineTextPart } from "./DevMachineTextPart";

export const DevMachineText: React.FC = () => {
  return (
    <div style={{
      fontSize: 100
    }} >
      <DevMachineTextPart text="D" color={COLOR_RED} />
      <DevMachineTextPart text="E" color={COLOR_RED} />
      <DevMachineTextPart text="V" color={COLOR_RED} />
      <DevMachineTextPart text="machine" color={COLOR_BLUE} />
    </div>
  );
};
