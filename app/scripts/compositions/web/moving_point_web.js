import checkParameter from '~/internal/check_parameter';
import randomInRectMover from '~/modificators/position/random_in_rect_mover';
import pointWeb from './point_web';
import loop from '~/loop';

export default function(options){
  checkParameter(options, 'amount', true);
  checkParameter(options, 'width', true);
  checkParameter(options, 'height', true);
  checkParameter(options, 'speed', true);

  var movingPointWeb = {};
  movingPointWeb.amount = options.amount;
  movingPointWeb.width = options.width;
  movingPointWeb.height = options.height;
  movingPointWeb.speed = options.speed;
  movingPointWeb._movers = [];
  movingPointWeb._points = [];
  movingPointWeb._pointWeb = null;
  movingPointWeb._listener = null;

  for(var i = 0; i < movingPointWeb.amount; i++){
    var point = { x: 0, y : 0};
    movingPointWeb._movers.push(randomInRectMover({
      subject:point,
      speed: movingPointWeb.speed,
      height: movingPointWeb.height,
      width: movingPointWeb.width
    }));

    movingPointWeb._points.push(point);
  }

  movingPointWeb._pointWeb = pointWeb({points: movingPointWeb._points});
  movingPointWeb.view = movingPointWeb._pointWeb.view;

  movingPointWeb.start = function(){
    for(var mover of this._movers){
      mover.start();
    }
    this._listener = loop.addAnimation(this._pointWeb.draw, this._pointWeb);
  };

  movingPointWeb.stop = function(){
    loop.removeAnimation(this._listener);
    for(var mover of this._movers){
      mover.stop();
    }
  };

  return movingPointWeb;
}
