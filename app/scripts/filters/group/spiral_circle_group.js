import factory from '~/factories/createjs/factory';
import abstractGroup from './abstract_group';
import checkParameter from '~/internal/check_parameter';

export default function(options) {

  checkParameter(options, 'children', true);
  checkParameter(options, 'startRadius', false, 10);
  checkParameter(options, 'endRadius', false, 1);
  checkParameter(options, 'rounds', false, 1);

  var spiralCircleGroup = abstractGroup(options.children);
  spiralCircleGroup.startRadius = options.startRadius;
  spiralCircleGroup.endRadius = options.endRadius;
  spiralCircleGroup.rounds = options.rounds;

  var angle = (360 * spiralCircleGroup.rounds) / spiralCircleGroup.children.length;
  var radiusIncreaseAmount = (spiralCircleGroup.endRadius - spiralCircleGroup.startRadius) / spiralCircleGroup.children.length;
  for (var i = 0; i < spiralCircleGroup.children.length; i++) {
    var container = factory.container();
    var innerContainer = factory.container();
    container.rotation = angle * i;
    innerContainer.y = -(spiralCircleGroup.startRadius + radiusIncreaseAmount * i);
    innerContainer.addChild(spiralCircleGroup.children[i].view);
    container.addChild(innerContainer);
    spiralCircleGroup.view.addChild(container);
  }

  return spiralCircleGroup;
}
