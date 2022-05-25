import {AbsoluteFill, Img} from 'remotion'

import image from '../../assets/group.jpg';
import { COLOR_BLUE, COLOR_WHITE } from '../constants';

export const ImageForPresentation: React.FC<{ text: string }> = ({ text }) => {

  const SHADOW = 4;

  return (
    <AbsoluteFill style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Img src={image} style={{ opacity: .8 }} />
      
      <AbsoluteFill style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p style={{
          fontSize: '400px',
          transform: 'rotate(10deg)',
          color: COLOR_WHITE,
          textShadow: `${SHADOW}px 0 0 ${COLOR_BLUE}, -${SHADOW}px 0 0 ${COLOR_BLUE}, 0 ${SHADOW}px 0 ${COLOR_BLUE}, 0 -${SHADOW}px 0 ${COLOR_BLUE}, ${SHADOW / 2}px ${SHADOW / 2}px ${COLOR_BLUE}, -${SHADOW / 2}px -${SHADOW / 2}px 0 ${COLOR_BLUE}, ${SHADOW / 2}px -${SHADOW / 2}px 0 ${COLOR_BLUE}, -${SHADOW / 2}px ${SHADOW / 2}px 0 ${COLOR_BLUE}`,
        }}>{ text }</p>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}