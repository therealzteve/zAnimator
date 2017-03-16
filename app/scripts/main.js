import factory from './factories/createjs/factory';
import flasher from './filters/opacity/flasher';
import fader from './filters/opacity/fader';
import group from './filters/group/group';
import mover from './filters/mover/mover';
import linearRotator from './filters/rotator/linear_rotator';
import randomColorChanger from './modificators/color/random_color_changer';
import colorFader from './modificators/color/color_fader';
import linearPulsar from './modificators/scale/linear_pulsar';
import randomColor from 'randomColor';
import loop from './loop';
import shapes from './geometry/shapes/shapes';
import paths from './geometry/paths/paths';
import compositions from './compositions/compositions';
import proxies from './proxies/proxies';
import interval from './timers/interval';

//TODO Organize imports

export function create(canvasId) {
    var mainContainer = factory.mainContainer(canvasId);
    loop.addAnimation(mainContainer.stage);
    return {
      version: '0.0.1',
      mainContainer: mainContainer,
      factory: factory,
      loop: loop,
      interval: interval,
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
        mover: mover,
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
      compositions: compositions,
      proxies: proxies
    };
  }
