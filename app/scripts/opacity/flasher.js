/* global zAnimator: true */
'use strict';
define(['adapter'], function(adapter){
  var handle = '';

  function start(){
    zAnimator.addAnimation(handle);
  }

  function stop(){
    zAnimator.removeAnimation(handle);
  }

  var flasher = function(){
  };

  flasher.view = adapter.container();
  flasher.start = start;
  flasher.stop = stop;
  flasher.handle = function(animator){
      flasher.view.addChild(animator.view);
      flasher.view.visible = ( Math.random() > 0.5);
  };

  return (flasher);
});
