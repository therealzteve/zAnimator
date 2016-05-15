var zAnimator = {};

zAnimator.createContainer = function(){
  return new createjs.Container();
}

zAnimator.addAnimation = function(animation){
  createjs.Ticker.addEventListener("tick", animation);
}

zAnimator.simpleAnimator = function(shape){
    var simpleAnimator = {
      view: shape,
      handle: function(){

      },
      stop: function(){

      }
    }
    return simpleAnimator;
}

zAnimator.simplePointAnimator = function(animator){
  var simplePointAnimator = {
    view : zAnimator.createContainer(),
    handlePoint: function(point, callback){
      simplePointAnimator.view.x = point.x;
      simplePointAnimator.view.y = point.y;
      callback();
    }
  }

  simplePointAnimator.view.addChild(animator.view);
}

zAnimator.flasher = function(animator){

  var flasher = {
    view: zAnimator.createContainer(),
    start: start;
    stop:stop;
  }

  function handle = function(){
      view.addChild(animator);
      flasher.view.visible = ( Math.random() > 0.5);
  }

  function start = function(){
    zAnimator.addAnimation(handle);
  }

  function stop = function(){
    zAnimator.removeAnimation(handle);
  }

}
