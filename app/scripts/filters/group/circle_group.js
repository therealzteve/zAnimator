import abstractGroup from 'abstract_group';
import factory from '~/factories/createjs/factory';

export default function(children, radius){
    var circleGroup = abstractGroup(children);

    /* Params and defaults */
    circleGroup.radius = radius ? radius : 10;

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
