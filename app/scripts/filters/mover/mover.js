import centralizer from './center/centralizer';
import pathMover from './path/path-mover';
import linear from './point2point/linear';
import linearShake from './point2point/linear_shake';

export default {
  center: {
    centralizer: centralizer
  },
  path: {
    pathMover: pathMover
  },
  linear: {
    linear: linear,
    linearShake: linearShake
  }
};
