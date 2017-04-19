import abstractFilter from '~/filters/abstract_filter';
import singleChildFilter from '~/filters/single_child_filter';
import transitionFilter from '~/filters/transition_filter';


export default function(options){

    var fader = transitionFilter(singleChildFilter(abstractFilter(), options), options);

    fader.handle = function(current){
      this.view.alpha = current;
    };

    return fader;
}
