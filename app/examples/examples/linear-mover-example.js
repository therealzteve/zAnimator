/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(10), '#F00');
  var fader = myAnimator.filters.opacity.fader(square);
  var mover = myAnimator.filters.mover.point2point.linear(fader, 300);
  exampleRunner.addExample({
    name: 'Linear Mover Example',
    start: function(){
      fader.view.x = 300;
      fader.view.y = 300;
      fader.start();
      mover.start();
      myAnimator.mainContainer.addChild(mover.view);
      mover.moveTo({'x': 100, 'y': 0 }, () => { fader.stop(); });
    },
    stop: function (){
      fader.stop();
      myAnimator.mainContainer.removeChild(fader.view);
    }
  });
});
