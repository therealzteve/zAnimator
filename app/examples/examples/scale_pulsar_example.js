/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var circle = myAnimator.factory.square(myAnimator.geometry.shapes.square(10), '#000');
  circle.view.x = 300;
  circle.view.y = 300;
  var scalePulsar = myAnimator.modificators.scale.linearPulsar(circle, 2000, 10);

  var square = myAnimator.factory.square(10, '#000');
  square.view.x = 400;
  square.view.y = 300;
  var scalePulsar2 = myAnimator.modificators.scale.exponentialPulsar(square, 10, 10);

  exampleRunner.addExample({
    name: 'scale pulsar example',
    start: function(){
      scalePulsar.start();
      scalePulsar2.start();
      myAnimator.mainContainer.addChild(square.view);
      myAnimator.mainContainer.addChild(circle.view);
    },
    stop: function (){
      scalePulsar.stop();
      scalePulsar2.stop();
      myAnimator.mainContainer.removeChild(square.view);
      myAnimator.mainContainer.removeChild(circle.view);
    }
  });
});
