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
  circleRows._childContainers = [];

  circleRows.draw = function(){
    for(var i = 0; i < this.children.length; i++){
      var rowContainer = this._childContainers[i];
      rowContainer.y = -( ((i + 1) / this.children.length) * this.radius);

      var positionContainer = this.rows[i];
      positionContainer.x = this.radius;
      positionContainer.y = this.radius;
    }
  };

  circleRows.init = function(){
    for(var i = 0; i < this.children.length; i++){
      var rowContainer = container();
      rowContainer.addChild(this.children[i].view);

      var positionContainer = container();
      positionContainer.addChild(rowContainer);

      this._childContainers.push(rowContainer);
      this.rows.push(positionContainer);
      this.view.addChild(positionContainer);
    }
  };

  circleRows.init();
  circleRows.draw();
  return circleRows;
}
