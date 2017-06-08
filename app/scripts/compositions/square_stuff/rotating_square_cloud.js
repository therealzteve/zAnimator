import checkParameter from '~/internal/check_parameter';
import squareShape from '~/geometry/shapes/square';
import square from '~/factories/createjs/components/square';
import container from '~/factories/createjs/components/container';
import linearRotator from '~/modificators/rotation/linear_rotator';

export default function(options){
  checkParameter(options, 'amount', true);
  checkParameter(options, 'minSize', false, 0);
  checkParameter(options, 'maxSize', true);

  var rotatingSquareCloud = {};
  rotatingSquareCloud.amount = options.amount;
  rotatingSquareCloud.minSize = options.minSize;
  rotatingSquareCloud.maxSize = options.maxSize;
  rotatingSquareCloud.view = container();
  rotatingSquareCloud.squares = [];

  rotatingSquareCloud.draw = function(){

  };


  rotatingSquareCloud.init = function(){
    this.view.removeAllChildren();
    this.squares.length = 0;
    for(var i = 0; i < this.amount; i++){
      var shape = squareShape({sidelength: Math.floor(Math.random() * this.maxSize) + this.minSize  });
      var randomSquare = square({squareShape: shape});
      randomSquare.view.alpha = Math.random();
      randomSquare.view.x = Math.random() * 250;
      randomSquare.view.y = Math.random() * 250;
      this.squares.push(randomSquare);
      this.view.addChild(randomSquare.view);
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
  };

  rotatingSquareCloud.stop = function(){
    this.linearRotator.stop();
  };

  rotatingSquareCloud.init();
  return rotatingSquareCloud;

}
