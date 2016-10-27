/*global exampleRunner: true*/

'use strict';

window.addEventListener('load', function(){
  var myAnimator = exampleRunner.getAnimator();
  var squares = [];
  for(var i = 0; i < 10; i++){
    var square = myAnimator.factory.square(myAnimator.geometry.shapes.square(10), '#F00');
    squares.push(square);
  }
  var centerGroup = myAnimator.filters.group.centerGroup(null, {'width': 50});

  var objectCount = 0;
  var increase = true;
  var throttle = 0;

  var loopHandler = function(){
    throttle++;
    if(throttle > 2){
      throttle = 0;
      if(increase){
        centerGroup.add(squares[objectCount]);
        objectCount++;
        if(objectCount > 9){
          objectCount--;
          increase = !increase;
        }
      }else{
        centerGroup.remove(squares[objectCount]);
        objectCount--;
        if(objectCount < 0){
          objectCount++;
          increase = !increase;
        }
      }
    }
  };
  exampleRunner.addExample({
    path: ['filters', 'group'],
    name: 'Center group Example 2',
    start: function(){
      myAnimator.mainContainer.addChild(centerGroup.view);
      myAnimator.loop.addAnimation(loopHandler);
    },
    stop: function (){
      myAnimator.loop.removeAnimation(loopHandler);
      myAnimator.mainContainer.removeChild(centerGroup.view);
    }
  });
});
