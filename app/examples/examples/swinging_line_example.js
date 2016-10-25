/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var swingingLine = myAnimator.compositions.pathMagic.bezier.swingingLine({length: 100, time: 1000, amplitude: 300});

  exampleRunner.addExample({
    name: 'swinging line example',
    start: function(){
      swingingLine.view.x = 300;
      swingingLine.view.y = 300;
      swingingLine.start();
      myAnimator.mainContainer.addChild(swingingLine.view);
    },
    stop: function (){
      swingingLine.stop();
      myAnimator.mainContainer.removeChild(swingingLine.view);
    }
  });
});
