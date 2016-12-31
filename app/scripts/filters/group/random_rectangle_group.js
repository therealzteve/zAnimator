import factory from '~/factories/createjs/factory';
import abstractGroup from './abstract_group';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    checkParameter(options, 'children', true);
    checkParameter(options, 'width', false, 10);
    checkParameter(options, 'height', false, 10);

    var rectangleGroup = abstractGroup(options.children);
    rectangleGroup.width = options.width;
    rectangleGroup.height = options.height;

    for(var i = 0; i < rectangleGroup.children.length; i++){
      var container = factory.container();
      container.addChild(rectangleGroup.children[i].view);
      container.x = Math.floor(rectangleGroup.width * Math.random());
      container.y = Math.floor(rectangleGroup.height * Math.random());
      rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
}
