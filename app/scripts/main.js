import factory from './factories/createjs/factory';
import flasher from './filters/opacity/flasher';
import fader from './filters/opacity/fader';
import linear from './filters/mover/point2point/linear';
import linearShake from './filters/mover/point2point/linear_shake';
import rectangleGroup from './filters/group/rectangle_group';
import circleGroup from './filters/group/circle_group';
import spiralCircleGroup from './filters/group/spiral_circle_group';
import randomCircleGroup from './filters/group/random_circle_group';
import loop from './loop';

export function create(canvasId) {
    console.log(factory);
    var mainContainer = factory.mainContainer(canvasId);
    loop.addAnimation(mainContainer);

    return {
      version: '0.0.1',
      mainContainer: mainContainer,
      factory: factory,
      filters: {
        opacity: {
          flasher: flasher,
          fader: fader
        },
        mover: {
          point2point: {
            linear: linear,
            linearShake: linearShake
          }
        },
        group: {
          rectangleGroup: rectangleGroup,
          circleGroup: circleGroup,
          spiralCircleGroup: spiralCircleGroup,
          randomCircleGroup: randomCircleGroup
        }
      }
    };
  }
