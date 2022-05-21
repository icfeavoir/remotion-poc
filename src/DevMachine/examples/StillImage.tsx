import {AbsoluteFill, Img} from 'remotion'

import image from '../../assets/group.jpg';
import { COLOR_RED } from '../constants';

export const StillImage: React.FC = () => {
  return (
    <AbsoluteFill style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      
      <AbsoluteFill
        id="julien"
        style={{
          border: `10px solid ${COLOR_RED}`,
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          left: '750px',
          top: '340px',
        }}
      />
      <Img src={image} />
    </AbsoluteFill>
  )
}