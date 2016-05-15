define(['adapter'],function(){

  var flasher = function(){
  }

  Flasher.view = adapter.container();
  Flasher.start = start;
  Flasher.stop = stop;
  Flasher.handle = function(animator){
      Flasher.view.addChild(animator.view);
      Flasher.view.visible = ( Math.random() > 0.5);
  };

  function start = function(){
    zAnimator.addAnimation(handle);
  }

  function stop = function(){
    zAnimator.removeAnimation(handle);
  }
  return (Flasher);
})
