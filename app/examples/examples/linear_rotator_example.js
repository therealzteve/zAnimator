/*global exampleRunner: true*/


window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var circles = [];
  for(var i = 0; i < 49; i++){
    circles.push(myAnimator.factory.circle(25, myAnimator.utils.randomColor(
      {
        hue: 'random'
      })));
  }

  var group = myAnimator.filters.group.rectangleGroup(circles, 50, 7);
  group.view.x = -150;
  group.view.y = -150;
  var mover = myAnimator.filters.mover.point2point.linear(group, 120);
  var fader = myAnimator.filters.opacity.fader(mover);
  var rotator = myAnimator.filters.rotator.linearRotator(fader, 120);
  exampleRunner.addExample({
    name: 'Rotator example',
    start: function(){
      fader.start();
      mover.start();
      rotator.view.x = 300;
      rotator.view.y = 300;
      rotator.start();
      myAnimator.mainContainer.addChild(rotator.view);
    },
    stop: function (){
      rotator.stop();
      myAnimator.mainContainer.removeChild(rotator.view);
    }
  });
});
