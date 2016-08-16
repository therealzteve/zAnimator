/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(10, '#F00');
  var fader = myAnimator.filters.opacity.fader(square);
  exampleRunner.addExample({
    name: 'Fader Example',
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
