/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(10), '#F00');
    var fader = myAnimator.filters.opacity.fader(square);
    squares.push(fader);
  }
  var rectangleGroup = myAnimator.filters.group.rectangleGroup(squares, 25);
  exampleRunner.addExample({
    name: 'Rectangle group Example',
    start: function(){
      for(var f of squares){
        f.start();
      }
      myAnimator.mainContainer.addChild(rectangleGroup.view);
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(rectangleGroup.view);
    }
  });
});
