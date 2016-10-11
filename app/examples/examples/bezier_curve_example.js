/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var bezierCurve = myAnimator.geometry.paths.bezierCurve({x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: -50}, {x: 100, y: -50});
  var customObject = myAnimator.factory.path(bezierCurve, "#F00");

  exampleRunner.addExample({
    name: 'bezier curve example',
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
