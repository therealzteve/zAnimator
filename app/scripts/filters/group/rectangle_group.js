import abstractGroup from './abstract_group';
import factory from '~/factories/createjs/factory';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    checkParameter(options, 'children', true);
    checkParameter(options, 'columns', false, 3);
    checkParameter(options, 'spacing', false, 10);

    var rectangleGroup = abstractGroup(options.children);

    rectangleGroup.columns = options.columns;
    rectangleGroup.spacing = options.spacing;

    for(var i = 0; i < rectangleGroup.children.length; i++){
      var container = factory.container();
      container.addChild(rectangleGroup.children[i].view);
      container.x = (i % rectangleGroup.columns) * rectangleGroup.spacing;
      container.y = Math.floor(i / rectangleGroup.columns) * rectangleGroup.spacing;
      rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
}
