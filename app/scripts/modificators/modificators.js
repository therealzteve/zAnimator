import randomColorChanger from './color/random_color_changer';
import colorFader from './color/color_fader';
import linearPulsar from './scale/linear_pulsar';
import randomArcMover from './position/random_arc_mover';

export default {
  color: {
    randomColorChanger: randomColorChanger,
    colorFader: colorFader
  },
  scale: {
    linearPulsar: linearPulsar
  },
  position: {
    randomArcMover: randomArcMover
  }
};
