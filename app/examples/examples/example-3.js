/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(10, '#F00');
  var fader = myAnimator.filters.opacity.fader(square);
  var mover = myAnimator.filters.mover.point2point.linear(fader, {'x': 0, 'y': 0 }, 200, () => {});
  exampleRunner.addExample({
    name: 'My second example',
    start: function(){
      fader.view.x = 600;
      fader.view.y = 600;
      fader.start();
      mover.start();
      myAnimator.mainContainer.addChild(mover.view);
    },
    stop: function (){
      fader.stop();
      myAnimator.mainContainer.removeChild(fader.view);
    }
  });
});
