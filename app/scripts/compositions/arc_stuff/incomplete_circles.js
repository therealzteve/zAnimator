import checkParameter from '~/internal/check_parameter';
import circleRows from './circle_rows';
import arcPath from '~/geometry/paths/arc';
import path from '~/factories/createjs/components/path';
import loop from '~/loop';

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
  incompleteCircles.circleRows = circleRows({
    radius: incompleteCircles.radius,
    children: incompleteCircles.arcs
  });
  incompleteCircles.view = incompleteCircles.circleRows.view;


  incompleteCircles.draw = function(){
    this.circleRows.radius = this.radius;

    for(var i = 0; i < this.rows; i++){
      this.arcs[i].completePath.radius = ((i + 1) / this.rows) * this.radius;
      this.arcs[i].draw();
    }

    this.circleRows.draw();
  };

  incompleteCircles.init = function(){
    // clear array
    this.arcs.length = 0;
    // Create arcs
    for(var i = 0; i < this.rows; i++){
      var arc = path({
        path: arcPath({
          degrees: this.minDegrees + (this.maxDegrees - this.minDegrees) * Math.random(),
          radius: ((i + 1) / this.rows) * this.radius
        })
      });
      this.arcs.push(arc);
    }

    // init circle rows
    this.circleRows.init();

    // set a random rotation of each circle row
    for(var row of this.circleRows.rows){
      row.rotation = Math.random() * 360;
    }
  };

  incompleteCircles.start = function(){
    this.init();
    loop.addComponent(this);
  };

  incompleteCircles.stop = function(){
    loop.removeComponent(this);
  };

  incompleteCircles.getWidth = function(){
    return this.radius * 2;
  };


  incompleteCircles.getHeight = function(){
    return this.radius * 2;
  };

  return incompleteCircles;
}
