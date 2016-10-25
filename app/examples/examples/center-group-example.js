/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(10), '#F00');
    squares.push(square);
  }
  var centerGroup = myAnimator.filters.group.centerGroup(squares, {'width': 800, 'height': 800});
  exampleRunner.addExample({
    name: 'Center group Example',
    start: function(){
      myAnimator.mainContainer.addChild(centerGroup.view);
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(centerGroup.view);
    }
  });
});
