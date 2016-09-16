/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squareShape = myAnimator.geometry.shapes.square(100);
  var square = myAnimator.factory.square(squareShape, '#F00');


  console.log(squareShape.path.getPoint(0.4));
  console.log(squareShape.path.getPoint(0.25));
  exampleRunner.addExample({
    name: 'Edge point example',
    start: function(){
      console.log(square);
      square.view.x = 600;
      square.view.y = 600;
      myAnimator.mainContainer.addChild(square.view);
      for(var point of squareShape.path.getEdgePoints()){
        console.log(point);
        var edgeShape = myAnimator.geometry.shapes.square(10);
        var edgeObject = myAnimator.factory.square(edgeShape, '#000');
        edgeObject.view.x = point.x;
        edgeObject.view.y = point.y;
        console.log(edgeObject);
        myAnimator.mainContainer.addChild(edgeObject.view);
      }
    },
    stop: function (){
      myAnimator.mainContainer.removeChild(square.view);
    }
  });
});
