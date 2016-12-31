import abstractFilter from '~/filters/abstract_filter';
import checkParameter from '~/internal/check_parameter';

export default function(options){

    checkParameter(options, 'child', true);

    var flasher = abstractFilter();

    flasher.view.addChild(options.child.view);
    flasher.handle = function(){
      flasher.view.visible = ( Math.random() > 0.5);
    };

    return flasher;
  }
