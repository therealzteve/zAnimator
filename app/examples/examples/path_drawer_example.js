/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var circleShape = myAnimator.geometry.shapes.circle(100);
  var pathDrawer = myAnimator.compositions.pathMagic.transitionPathDrawer(circleShape.path, {color: '#F00', width: 25});
  var randomPartPathDrawer = myAnimator.compositions.pathMagic.randomPartPathDrawer(circleShape.path);

  exampleRunner.addExample({
    name: 'path drawer example',
    start: function(){
      pathDrawer.view.x = 300;
      pathDrawer.view.y = 300;
      randomPartPathDrawer.view.x = 200;
      randomPartPathDrawer.view.y = 200;
      pathDrawer.start();
      randomPartPathDrawer.start();
      myAnimator.mainContainer.addChild(pathDrawer.view);
      myAnimator.mainContainer.addChild(randomPartPathDrawer.view);
    },
    stop: function (){
      pathDrawer.stop();
      randomPartPathDrawer.stop();
      myAnimator.mainContainer.removeChild(pathDrawer.view);
      myAnimator.mainContainer.removeChild(randomPartPathDrawer.view);
    }
  });
});
