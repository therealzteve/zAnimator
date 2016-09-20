/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var circleShape = myAnimator.geometry.shapes.circle(50);
  var circleShape2 = myAnimator.geometry.shapes.circle(50);
  var squareShape = myAnimator.geometry.shapes.square(100);
  circleShape.path.subPaths[0].start.x = 0;
  circleShape.path.subPaths[0].start.y = 0;
  circleShape2.path.subPaths[0].start.x = 100;
  circleShape2.path.subPaths[0].start.y = -100;
  circleShape.path.subPaths = circleShape.path.subPaths.concat(squareShape.path.subPaths);
  circleShape.path.subPaths = circleShape.path.subPaths.concat(circleShape2.path.subPaths);
  console.log(circleShape.path.getEdgePoints());
  var customObject = myAnimator.factory.customObject(circleShape, "#F00");

  exampleRunner.addExample({
    name: 'custom object example',
    start: function(){
      customObject.view.x = 300;
      customObject.view.y = 300;
      myAnimator.mainContainer.addChild(customObject.view);
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(customObject.view);
    }
  });
});
