/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squares = [];
  /*for(var i = 0; i < 100; i++){
    var square = myAnimator.factory.square(10, '#F00');
    var fader = myAnimator.filters.opacity.fader(square);
    squares.push(fader);
  }*/

  for(var j = 0; j < 100; j++){
    var square2 = myAnimator.factory.square(myAnimator.geometry.shapes.square(30), '#F00');
    var flasher = myAnimator.filters.opacity.flasher(square2);
    flasher.start();
    var fader = myAnimator.filters.opacity.fader(flasher, 1);
    squares.push(fader);
  }

  var circleGroup = myAnimator.filters.group.circleGroup(squares, 100);
  circleGroup.view.x = 300;
  circleGroup.view.y = 300;
  exampleRunner.addExample({
    name: 'Circle group Example',
    start: function(){
      for(var f of squares){
        f.start();
      }
      myAnimator.mainContainer.addChild(circleGroup.view);
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(circleGroup.view);
      for(var f of squares){
        f.stop();
      }
    }
  });
});
