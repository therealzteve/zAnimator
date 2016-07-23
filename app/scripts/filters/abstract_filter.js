import loop from '~/loop';
import factory from '~/factories/createjs/factory';

export default function(){
    var filter = {};

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
