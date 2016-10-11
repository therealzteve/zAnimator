/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squareShape = myAnimator.geometry.shapes.square(100);
  var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(5), '#F00');
  var pathMover = myAnimator.filters.mover.path.pathMover(square, 1.3, squareShape.path);

  var circleShape = myAnimator.geometry.shapes.circle(100);
  var circle = myAnimator.factory.circle(myAnimator.geometry.shapes.circle(30), '#F00');
  var circlePathMover = myAnimator.filters.mover.path.pathMover(circle, 1.3, circleShape.path);

  var circle2 = myAnimator.factory.circle(myAnimator.geometry.shapes.circle(3), '#F00');
  var bezierPath = myAnimator.geometry.paths.bezierCurve({x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: -50}, {x: 500, y: 50});
  var bezierPathMover = myAnimator.filters.mover.path.pathMover(circle2, 1.3, bezierPath);

  var staticCircle = myAnimator.factory.circle(circleShape, '#00F');

  exampleRunner.addExample({
    name: 'Path mover example',
    start: function(){
      console.log(square);
      square.view.x = 600;
      square.view.y = 600;

      circle.view.x = 300;
      circle.view.y = 300;

      staticCircle.view.x = 300;
      staticCircle.view.y = 300;

      circle2.view.x = 200;
      circle2.view.y = 200;

      myAnimator.mainContainer.addChild(staticCircle.view);
      myAnimator.mainContainer.addChild(circlePathMover.view);
      myAnimator.mainContainer.addChild(pathMover.view);
      myAnimator.mainContainer.addChild(bezierPathMover.view);

      circlePathMover.start();
      pathMover.start();
      bezierPathMover.start();
    },
    stop: function (){
      circlePathMover.stop();
      pathMover.stop();
      bezierPathMover.stop();
      myAnimator.mainContainer.removeChild(staticCircle.view);
      myAnimator.mainContainer.removeChild(circlePathMover.view);
      myAnimator.mainContainer.removeChild(pathMover.view);
      myAnimator.mainContainer.removeChild(bezierPathMover.view);

    }
  });
});
