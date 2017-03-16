import loop from '~/loop';

export default function(filter){

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
