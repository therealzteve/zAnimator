/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();

  var sine = myAnimator.geometry.paths.sineWave( {x: 0, y: 0}, {x: 300, y: 0}, (2 / 300), 50);
  var path = myAnimator.geometry.paths.path();
  path.subPaths.push(sine);


  var shape = {
    path: path
  };
  var customObject = myAnimator.factory.customObject(shape, "#FFF");

  var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(5), '#F00');
  var pathMover = myAnimator.filters.mover.path.pathMover(square, 0.25, path);

  console.log(customObject);
  exampleRunner.addExample({
    name: 'sine wave example',
    start: function(){
      customObject.view.x = 300;
      customObject.view.y = 300;
      square.view.x = 300;
      square.view.y = 300;
      myAnimator.mainContainer.addChild(customObject.view);
      myAnimator.mainContainer.addChild(pathMover.view);
      pathMover.start();
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(customObject.view);
      myAnimator.mainContainer.removeChild(pathMover.view);
      pathMover.stop();
    }
  });
});
