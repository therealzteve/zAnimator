/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(10), '#000');
  var flasher = myAnimator.filters.opacity.flasher(square);
  exampleRunner.addExample({
    name: 'Shaker example',
    start: function(){
      flasher.view.x = 300;
      flasher.view.y = 300;
      flasher.start();
      myAnimator.mainContainer.addChild(flasher.view);
    },
    stop: function (){
      flasher.stop();
      myAnimator.mainContainer.removeChild(flasher.view);
    }
  });
});
