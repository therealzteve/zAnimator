import factory from './factories/createjs/factory';
import flasher from './filters/opacity/flasher';
import fader from './filters/opacity/fader';
import linear from './filters/mover/point2point/linear';
import linearShake from './filters/mover/point2point/linear_shake';
import group from './filters/group/group';
import linearRotator from './filters/rotator/linear_rotator';
import randomColorChanger from './modificators/color/random_color_changer';
import colorFader from './modificators/color/color_fader';
import linearPulsar from './modificators/scale/linear_pulsar';
import randomColor from 'randomColor';
import loop from './loop';
import shapes from './geometry/shapes/shapes';
import paths from './geometry/paths/paths';
import pathMover from './filters/mover/path/path-mover';
import compositions from './compositions/compositions';

export function create(canvasId) {
    var mainContainer = factory.mainContainer(canvasId);
    loop.addAnimation(mainContainer);
    createjs.Ticker.setFPS(60);
    return {
      version: '0.0.1',
      mainContainer: mainContainer,
      factory: factory,
      loop: loop,
      utils: {
        randomColor: randomColor
      },
      geometry: {
        shapes: shapes,
        paths: paths
      },
      filters: {
        opacity: {
          flasher: flasher,
          fader: fader
        },
        mover: {
          point2point: {
            linear: linear,
            linearShake: linearShake
          },
          path: {
            pathMover: pathMover
          }
        },
        group: group,
        rotator: {
          linearRotator: linearRotator
        }
      },
      modificators: {
        color: {
          randomColorChanger: randomColorChanger,
          colorFader: colorFader
        },
        scale: {
          linearPulsar: linearPulsar
        }
      },
      compositions: compositions
    };
  }
