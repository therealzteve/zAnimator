import abstractGroup from 'abstract_group';
import factory from '~/factories/createjs/factory';

export default function(children, spacing, columns){
    var rectangleGroup = abstractGroup(children);

    /* Params and defaults */
    rectangleGroup.columns = columns ? columns : 3;

    for(var i = 0; i < rectangleGroup.children.length; i++){
      var container = factory.container();
      container.addChild(rectangleGroup.children[i].view);
      container.x = (i % rectangleGroup.columns) * spacing;
      container.y = Math.floor(i / rectangleGroup.columns) * spacing;
      rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
}
