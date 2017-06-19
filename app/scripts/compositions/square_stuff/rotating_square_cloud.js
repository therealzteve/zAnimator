import checkParameter from '~/internal/check_parameter';
import squareShape from '~/geometry/shapes/square';
import square from '~/factories/createjs/components/square';
import container from '~/factories/createjs/components/container';
import linearRotator from '~/modificators/rotation/linear_rotator';
import loop from '~/loop';


export default function(options){
  checkParameter(options, 'amount', true);
  checkParameter(options, 'minSize', false, 0);
  checkParameter(options, 'maxSize', true);
  checkParameter(options, 'radius', true);

  var rotatingSquareCloud = {};
  rotatingSquareCloud.amount = options.amount;
  rotatingSquareCloud.minSize = options.minSize;
  rotatingSquareCloud.maxSize = options.maxSize;
  rotatingSquareCloud.radius = options.radius;
  rotatingSquareCloud.view = container();
  rotatingSquareCloud.squares = [];

  rotatingSquareCloud.draw = function(){
    for(var _square of this.squares){
      _square.component.view.x = this.radius * _square.radiusFactor * Math.cos(_square.angle);
      _square.component.view.y = this.radius * _square.radiusFactor * Math.sin(_square.angle);
    }
  };


  rotatingSquareCloud.init = function(){
    this.view.removeAllChildren();
    this.squares.length = 0;
    for(var i = 0; i < this.amount; i++){
      var shape = squareShape({sidelength: Math.floor(Math.random() * this.maxSize) + this.minSize });

      var randomSquare = square({squareShape: shape});
      randomSquare.view.alpha = Math.random();

      var _square = {};
      _square.radiusFactor = Math.random();
      _square.angle = Math.random() * 2 * Math.PI;
      _square.component = randomSquare;

      this.squares.push(_square);
      this.view.addChild(_square.component.view);
    }

    rotatingSquareCloud.linearRotator = linearRotator({subject: this.view, speed: 25});

  };

  rotatingSquareCloud.getWidth = function(){
      return 250 * rotatingSquareCloud.maxSize;
  };

  rotatingSquareCloud.geHeight = function(){
      return 250 * rotatingSquareCloud.maxSize;
  };

  rotatingSquareCloud.start = function(){
    this.linearRotator.start();
    console.log('adding this component');
    loop.addComponent(this);
  };

  rotatingSquareCloud.stop = function(){
    this.linearRotator.stop();
    loop.removeComponent(this);
  };

  rotatingSquareCloud.init();
  return rotatingSquareCloud;

}
