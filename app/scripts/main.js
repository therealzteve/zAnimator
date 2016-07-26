import factory from './factories/createjs/factory';
import flasher from './filters/opacity/flasher';
import fader from './filters/opacity/fader';
import linear from './filters/mover/point2point/linear';
import inOutQuad from './filters/mover/point2point/in_out_quad';
import inOutBack from './filters/mover/point2point/in_out_back';
import linearShake from './filters/mover/point2point/linear_shake';
import rectangleGroup from './filters/group/rectangle_group';
import randomRectangleGroup from './filters/group/random_rectangle_group';
import circleGroup from './filters/group/circle_group';
import spiralCircleGroup from './filters/group/spiral_circle_group';
import randomCircleGroup from './filters/group/random_circle_group';
import linearRotator from './filters/rotator/linear_rotator';
import randomColorChanger from './modificators/color/random_color_changer';
import linearPulsar from './modificators/scale/linear_pulsar';
import exponentialPulsar from './modificators/scale/exponential_pulsar';
import randomColor from 'randomColor';
import loop from './loop';

export function create(canvasId) {
    console.log(factory);
    var mainContainer = factory.mainContainer(canvasId);
    loop.addAnimation(mainContainer);

    return {
      version: '0.0.1',
      mainContainer: mainContainer,
      factory: factory,
      utils: {
        randomColor: randomColor
      },
      filters: {
        opacity: {
          flasher: flasher,
          fader: fader
        },
        mover: {
          point2point: {
            linear: linear,
            linearShake: linearShake,
            inOutQuad: inOutQuad,
            inOutBack: inOutBack
          }
        },
        group: {
          rectangleGroup: rectangleGroup,
          randomRectangleGroup: randomRectangleGroup,
          circleGroup: circleGroup,
          spiralCircleGroup: spiralCircleGroup,
          randomCircleGroup: randomCircleGroup
        },
        rotator: {
          linearRotator: linearRotator
        }
      },
      modificators: {
        color: {
          randomColorChanger: randomColorChanger
        },
        scale: {
          linearPulsar: linearPulsar,
          exponentialPulsar: exponentialPulsar
        }
      }
    };
  }
