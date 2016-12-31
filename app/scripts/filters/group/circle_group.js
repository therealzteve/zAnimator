import abstractGroup from './abstract_group';
import factory from '~/factories/createjs/factory';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    checkParameter(options, 'children', true);
    checkParameter(options, 'radius', false, 10);
    var circleGroup = abstractGroup(options.children);
    circleGroup.radius = options.radius;

    var angle = 360 / circleGroup.children.length;
    for(var i = 0; i < circleGroup.children.length; i++){
      var container = factory.container();
      var innerContainer = factory.container();
      container.rotation = angle * i;
      innerContainer.y = -circleGroup.radius;
      innerContainer.addChild(circleGroup.children[i].view);
      container.addChild(innerContainer);
      circleGroup.view.addChild(container);
    }

    return circleGroup;
}
