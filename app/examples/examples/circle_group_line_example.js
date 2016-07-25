/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squares = [];

  for(var j = 0; j < 4; j++){
    var line = myAnimator.factory.line(0, -400, 10, '#F00');
    var rotator = myAnimator.filters.rotator.linearRotator(line, 180);
    squares.push(rotator);
    rotator.start();
  }

  var circleGroup = myAnimator.filters.group.randomCircleGroup(squares, 0, 0);

  var linearRotator = myAnimator.filters.rotator.linearRotator(circleGroup, 0);

  linearRotator.view.x = 500;
  linearRotator.view.y = 500;
  exampleRunner.addExample({
    name: 'Circle group with line example',
    start: function(){
      linearRotator.start();
      myAnimator.mainContainer.addChild(linearRotator.view);
    },
    stop: function (){
      linearRotator.stop();
      myAnimator.mainContainer.removeChild(linearRotator.view);
    }
  });
});
