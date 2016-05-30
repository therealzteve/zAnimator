'use strict';
define(['factory', '../loop'], function(factory, loop){

  function Fader(child, speed, increase){
    var fader = {};

    /* Params and defaults */
    fader.speed = speed ? speed : 1;
    fader.increase = increase ? increase : true;
    fader.view = factory.container();

    /* Public functions */
    function start(){
      fader.view.addChild(child.view);
      loop.addAnimation(fader.handle);
    }

    function stop(){
      loop.removeAnimation(fader.handle);
    }

    function handle(event){
      if(fader.increase){
        handleIncrease(event);
      }else{
        handleDecrease(event);
      }
    }

    fader.start = start;
    fader.stop = stop;
    fader.handle = handle;


    /* Private functions */
    var handleIncrease = function(event){
      fader.view.opacity = fader.view.opacity + speed * (event.delta / 1000);
      if(fader.view.opacity >= 1){
        fader.view.opacity = 1;
        fader.increase = false;
      }
    };

    var handleDecrease = function(event){
      fader.view.opacity = fader.view.opacity - speed * (event.delta / 1000);
      if(fader.view.opacity <= 0){
        fader.view.opacity = 0;
        fader.increase = true;
      }
    };

    return fader;
  }

  return (Fader);
});
