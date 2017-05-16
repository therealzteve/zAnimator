import checkParameter from '~/internal/check_parameter';
import container from '~/factories/createjs/components/container';

export default function(options){

  checkParameter(options, 'radius', true);
  checkParameter(options, 'children', true);

  var circleRows = {};
  circleRows.view = container();
  circleRows.radius = options.radius;
  circleRows.children = options.children;
  circleRows.rows = [];

  for(var i = 0; i < circleRows.children.length; i++){
    var rowContainer = container();
    rowContainer.y = -( ((i + 1) / circleRows.children.length) * circleRows.radius);
    rowContainer.addChild(circleRows.children[i].view);

    var positionContainer = container();
    positionContainer.x = circleRows.radius;
    positionContainer.y = circleRows.radius;
    positionContainer.addChild(rowContainer);
    positionContainer.rotation = Math.random() * 360;

    circleRows.rows.push(positionContainer);
    circleRows.view.addChild(positionContainer);
  }

  return circleRows;
}
