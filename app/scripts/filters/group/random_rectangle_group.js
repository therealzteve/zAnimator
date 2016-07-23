import factory from '~/factories/createjs/factory';
import abstractGroup from 'abstract_group';

export default function(children, width, height){
    var rectangleGroup = abstractGroup(children);

    /* Params and defaults */
    rectangleGroup.width = width ? width : 10;
    rectangleGroup.height = height ? height : 10;

    for(var i = 0; i < rectangleGroup.children.length; i++){
      var container = factory.container();
      container.addChild(rectangleGroup.children[i].view);
      container.x = Math.floor(rectangleGroup.width * Math.random());
      container.y = Math.floor(rectangleGroup.height * Math.random());
      rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
}
