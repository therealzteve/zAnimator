import randomColorChanger from './color/random_color_changer';
import colorFader from './color/color_fader';
import linearPulsar from './scale/linear_pulsar';
import randomArcMover from './position/random_arc_mover';
import randomInRectMover from './position/random_in_rect_mover';
import rangeModificator from './range_modificator';
import pulse from './pulse/pulse';

export default {
  color: {
    randomColorChanger: randomColorChanger,
    colorFader: colorFader
  },
  scale: {
    linearPulsar: linearPulsar
  },
  position: {
    randomArcMover: randomArcMover,
    randomInRectMover: randomInRectMover
  },
  pulse: pulse,
  rangeModificator: rangeModificator
};
