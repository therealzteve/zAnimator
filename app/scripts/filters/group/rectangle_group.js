import factory from '~/factories/createjs/factory';

export default function(children, spacing, columns){
    var rectangleGroup = {};

    /* Params and defaults */
    rectangleGroup.columns = columns ? columns : 3;
    rectangleGroup.view = factory.container();
    rectangleGroup.children = children ? children : [];

    for(var i = 0; i < rectangleGroup.children.length; i++){
      var container = factory.container();
      container.addChild(rectangleGroup.children[i].view);
      container.x = (i % rectangleGroup.columns) * spacing;
      console.log('x = ' + container.x );
      container.y = Math.floor(i / rectangleGroup.columns) * spacing;
      console.log('y = ' + container.y );
      rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
}
