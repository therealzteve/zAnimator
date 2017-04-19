import abstractFilter from '~/filters/abstract_filter';
import singleChildFilter from '~/filters/single_child_filter';
import animationFilter from '~/filters/animation_filter';

export default function(options){

    var flasher = animationFilter(singleChildFilter(abstractFilter(), options), options);

    flasher.handle = function(){
      console.log(this);
      this.view.visible = ( Math.random() > 0.5);
    };

    return flasher;
  }
 
