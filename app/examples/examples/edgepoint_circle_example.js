/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var circleShape = myAnimator.geometry.shapes.circle(100);
  var circle = myAnimator.factory.circle(circleShape, '#F00');
  circle.view.x = 600;
  circle.view.y = 600;

  console.log("should be 0 and 100");
  console.log(circleShape.path.getPoint(0.5));

  exampleRunner.addExample({
    name: 'Edge circle point example',
    start: function(){
      myAnimator.mainContainer.addChild(circle.view);
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(circle.view);
    }
  });
});
