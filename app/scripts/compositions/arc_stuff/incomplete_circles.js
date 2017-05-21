import checkParameter from '~/internal/check_parameter';
import circleRows from './circle_rows';
import arcPath from '~/geometry/paths/arc';
import path from '~/factories/createjs/components/path';

export default function(options){

  checkParameter(options, 'rows', true);
  checkParameter(options, 'radius', true);
  checkParameter(options, 'maxDegrees', true);
  checkParameter(options, 'minDegrees', false, options.maxDegrees );

  var incompleteCircles = {};
  incompleteCircles.rows = options.rows;
  incompleteCircles.radius = options.radius;
  incompleteCircles.maxDegrees = options.maxDegrees;
  incompleteCircles.minDegrees = options.minDegrees;
  incompleteCircles.arcs = [];

  for(var i = 0; i < incompleteCircles.rows; i++){
    var arc = path({
      path: arcPath({
        degrees: incompleteCircles.minDegrees + (incompleteCircles.maxDegrees - incompleteCircles.minDegrees) * Math.random(),
        radius: ((i + 1) / incompleteCircles.rows) * incompleteCircles.radius
      })
    });
    incompleteCircles.arcs.push(arc);
  }

  incompleteCircles.circleRows = circleRows({
    radius: incompleteCircles.radius,
    children: incompleteCircles.arcs
  });
  for(var row of incompleteCircles.circleRows.rows){
    row.rotation = Math.random() * 360;
  }

  incompleteCircles.view = incompleteCircles.circleRows.view;

  return incompleteCircles;
}
