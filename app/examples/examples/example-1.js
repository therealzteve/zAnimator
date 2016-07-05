/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(10, '#000');
  var flasher = myAnimator.filters.opacity.flasher(square);
  exampleRunner.addExample({
    name: 'My first example',
    start: function(){
      console.log('Starting example 1');
      flasher.view.x = 300;
      flasher.view.y = 300;
      flasher.start();
      myAnimator.mainContainer.addChild(flasher.view);
    },
    stop: function (){
      console.log('stopping example 1');
      flasher.stop();
      myAnimator.mainContainer.removeChild(flasher.view);
    }
  });
});
