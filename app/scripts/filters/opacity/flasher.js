import loop from '~/loop';
import factory from '~/factories/createjs/factory';

export default function(child){
    var flasher = {};

    function start(){
      flasher.view.addChild(child.view);
      loop.addAnimation(flasher.handle);
    }

    function stop(){
      loop.removeAnimation(flasher.handle);
    }

    flasher.view = factory.container();
    flasher.start = start;
    flasher.stop = stop;
    flasher.handle = function(){
      flasher.view.visible = ( Math.random() > 0.5);
    };
    return flasher;
  }
