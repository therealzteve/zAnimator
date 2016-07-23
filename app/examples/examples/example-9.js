/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squares = [];
  for(var i = 0; i < 49; i++){
    squares.push(myAnimator.factory.square(10, '#000'));
  }

  var group = myAnimator.filters.group.rectangleGroup(squares, 50, 7);
  group.view.x = -155;
  group.view.y = -155;
  var mover = myAnimator.filters.mover.point2point.linear(group, 120);
  var fader = myAnimator.filters.opacity.fader(mover);
  var rotator = myAnimator.filters.rotator.linearRotator(fader, 120);
  exampleRunner.addExample({
    name: 'Rotator example',
    start: function(){
      fader.start();
      mover.start();
      rotator.view.x = 300;
      rotator.view.y = 300;
      rotator.start();
      myAnimator.mainContainer.addChild(rotator.view);
    },
    stop: function (){
      rotator.stop();
      myAnimator.mainContainer.removeChild(rotator.view);
    }
  });
});
