/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var linePath = myAnimator.geometry.paths.line({x: 0 , y: 0}, {x:100, y: 0});
  var line = myAnimator.factory.line(linePath, 1, '#000');

  var halfLinePath = linePath.getPartPath(0.5);
  var halfLine = myAnimator.factory.line(halfLinePath, 1, '#000');

  exampleRunner.addExample({
    name: 'Path part example',
    start: function(){
      line.view.x = 300;
      line.view.y = 300;
      halfLine.view.x = 300;
      halfLine.view.y = 350;
      myAnimator.mainContainer.addChild(line.view);
      myAnimator.mainContainer.addChild(halfLine.view);
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(line.view);
      myAnimator.mainContainer.removeChild(halfLine.view);
    }
  });
});
