import factory from '~/factories/createjs/factory';
import abstractGroup from 'abstract_group';

export default function(children, startRadius, endRadius, rounds){
    var spiralCircleGroup = abstractGroup(children);

    /* Params and defaults */
    spiralCircleGroup.startRadius = startRadius ? startRadius : 10;
    spiralCircleGroup.endRadius = endRadius ? endRadius : 10;

    var angle = (360 * rounds) / spiralCircleGroup.children.length;
    var radiusIncreaseAmount = (spiralCircleGroup.endRadius - spiralCircleGroup.startRadius) / spiralCircleGroup.children.length;
    for(var i = 0; i < spiralCircleGroup.children.length; i++){
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
