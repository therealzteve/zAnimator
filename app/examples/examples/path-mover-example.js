/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squareShape = myAnimator.geometry.shapes.square(100);
  var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(5), '#F00');
  var pathMover = myAnimator.filters.mover.path.pathMover(square, 1.3, squareShape.path);


  exampleRunner.addExample({
    name: 'Path mover example',
    start: function(){
      console.log(square);
      square.view.x = 600;
      square.view.y = 600;
      myAnimator.mainContainer.addChild(pathMover.view);
      pathMover.start();
    },
    stop: function (){
      pathMover.stop();
      myAnimator.mainContainer.removeChild(pathMover.view);
    }
  });
});
