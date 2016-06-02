/*global exampleRunner: true, zAnimator: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = zAnimator('example-canvas2');
  var square = myAnimator.factory.square(10, '#F00');
  var fader = myAnimator.opacity.fader(square);
  exampleRunner.addExample({
    name: 'My second example',
    start: function(){
      fader.view.x = 600;
      fader.view.y = 600;
      fader.start();
      myAnimator.mainContainer.addChild(fader.view);
    },
    stop: function (){
      fader.stop();
      myAnimator.mainContainer.removeChild(fader.view);
    }
  });
});
