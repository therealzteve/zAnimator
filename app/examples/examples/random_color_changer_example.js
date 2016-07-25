/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(10, '#000');
  var colorChanger = myAnimator.modificators.color.randomColorChanger(square);
  exampleRunner.addExample({
    name: 'random color changer example',
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
