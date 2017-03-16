import loop from '~/loop';
import factory from '~/factories/createjs/factory';
import abstractComponent from '~/abstract_component';

export default function(){
    var filter = abstractComponent();

    filter.view = factory.container();

    /* Public functions */
    function start(){
      loop.addAnimation(filter.handle);
    }

    function stop(){
      loop.removeAnimation(filter.handle);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
}
