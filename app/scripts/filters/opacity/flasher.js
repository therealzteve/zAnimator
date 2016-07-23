import abstractFilter from '~/filters/abstract_filter';

export default function(child){
    var flasher = abstractFilter();

    flasher.view.addChild(child.view);
    flasher.handle = function(){
      flasher.view.visible = ( Math.random() > 0.5);
    };

    return flasher;
  }
