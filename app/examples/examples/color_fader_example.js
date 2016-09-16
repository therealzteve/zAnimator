/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(100), '#000');
  var colorChanger = myAnimator.modificators.color.colorFader(square, 500, '#000', '#00F');
  exampleRunner.addExample({
    name: 'color fader',
    start: function(){
      square.view.x = 300;
      square.view.y = 300;
      colorChanger.start();
      myAnimator.mainContainer.addChild(square.view);
    },
    stop: function (){
      colorChanger.stop();
      myAnimator.mainContainer.removeChild(square.view);
    }
  });
});
