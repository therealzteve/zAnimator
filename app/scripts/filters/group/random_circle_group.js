import factory from '~/factories/createjs/factory';
import abstractGroup from 'abstract_group';

export default function(children, radius, randomRange){
    var circleGroup = abstractGroup(children);

    /* Params and defaults */
    circleGroup.radius = radius ? radius : 10;
    circleGroup.randomRange = randomRange ? randomRange : 10;

    var angle = 360 / circleGroup.children.length;
    for(var i = 0; i < circleGroup.children.length; i++){
      var container = factory.container();
      var innerContainer = factory.container();
      container.rotation = angle * i;
      innerContainer.y = -circleGroup.radius + Math.floor(Math.random() * randomRange - randomRange * 0.5);
      innerContainer.addChild(circleGroup.children[i].view);
      container.addChild(innerContainer);
      circleGroup.view.addChild(container);
    }

    return circleGroup;
}
