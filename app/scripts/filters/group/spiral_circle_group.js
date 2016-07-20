import factory from '~/factories/createjs/factory';

export default function(children, startRadius, endRadius, rounds){
    var spiralCircleGroup = {};

    /* Params and defaults */
    spiralCircleGroup.startRadius = startRadius ? startRadius : 10;
    spiralCircleGroup.endRadius = endRadius ? endRadius : 10;
    spiralCircleGroup.view = factory.container();
    spiralCircleGroup.children = children ? children : [];

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
