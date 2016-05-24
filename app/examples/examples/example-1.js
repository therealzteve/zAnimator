/*global exampleRunner: true, zAnimator: true*/

'use strict';

window.addEventListener('load', function(){
  exampleRunner.addExample({
    name: 'My first example',
    code: function(){
      var myAnimator = zAnimator('example-canvas');
      var square = myAnimator.factory.square(10, '#000');
      var flasher = myAnimator.opacity.flasher(square);
      flasher.view.x = 300;
      flasher.view.y = 300;
      flasher.start();
      myAnimator.mainContainer.addChild(flasher.view);
    }
  });
});
