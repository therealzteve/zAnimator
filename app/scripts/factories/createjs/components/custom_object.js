import abstractComponent from './abstract_component';
import angleToRadians from '~/geometry/helper/angle_to_radians';
import addUpPoints from '~/geometry/add_up_points';

export default function(customShape, color){

      var custom = abstractComponent();
      custom.customShape = customShape;
      custom.color = color;

      custom.draw = function(){
          custom.view.graphics.clear();
          custom.view.graphics.beginFill(custom.color).beginStroke("#00F").moveTo(0,0);
          var current = {x: 0, y: 0};
          var i = 1;
          for(var path of custom.customShape.path.subPaths){
            //custom.view.graphics.drawRect(current.x, current.y, 2 * i,2 * i);
            console.log('current point: ' +  current.x  + ' ' + current.y);
            if(path.type === 'line'){
              console.log('drawing line to: ' +  (current.x + path.getEdgePoint().x)  + ' ' + (current.y + path.getEdgePoint().y));
              custom.view.graphics.lineTo(current.x + path.getEdgePoint().x, current.y + path.getEdgePoint().y);
            }
            if(path.type === 'arc'){
              console.log('drawing arc to: ' + (current.x + path.getEdgePoint().x) + ' ' + (current.y + path.getEdgePoint().y));
              custom.view.graphics.moveTo(path.start.x, path.start.y);
              custom.view.graphics.arc(path.start.x, path.start.y + path.radius, path.radius, angleToRadians(-90), angleToRadians(path.degrees - 90));
            }
            current = addUpPoints(current, path.getEdgePoint());
            i++;
          }
      };

      custom.draw();
      return custom;
}
