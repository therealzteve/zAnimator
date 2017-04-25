import randomInRectMover from '~/modificators/position/random_in_rect_mover';
import checkParameter from '~/internal/check_parameter';
import container from '~/factories/createjs/components/container';

export default function(options){

  checkParameter(options, 'amount', true);
  checkParameter(options, 'width', true);
  checkParameter(options, 'height', true);
  checkParameter(options, 'component', true);
  checkParameter(options, 'speed', true);

  var randomRectMoveBackground = {};
  randomRectMoveBackground.amount = options.amount;
  randomRectMoveBackground.width = options.width;
  randomRectMoveBackground.height = options.height;
  randomRectMoveBackground.sourceComponent = options.component;
  randomRectMoveBackground.speed = options.speed;
  randomRectMoveBackground.view = container();

  randomRectMoveBackground._movers = [];

  for(var i = 0; i < randomRectMoveBackground.amount; i++){
    var square = randomRectMoveBackground.sourceComponent.getCopy();
    randomRectMoveBackground._movers.push(randomInRectMover({
      subject: square.view,
      speed: randomRectMoveBackground.speed,
      width: randomRectMoveBackground.width,
      height: randomRectMoveBackground.height}
    ));
    randomRectMoveBackground.view.addChild(square.view);
  }

  randomRectMoveBackground.start = function(){
    for(var j = 0; j < this.amount; j++){
      this._movers[j].start();
    }
  };

  randomRectMoveBackground.stop = function(){
    for(var j = 0; j < this.amount; j++){
      this._movers[j].stop();
    }
  };

  return randomRectMoveBackground;
}
