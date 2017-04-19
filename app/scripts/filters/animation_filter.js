import loop from '~/loop';

export default function(filter){

    /* Public functions */
    function start(){
      loop.addAnimation(this.handle);
    }

    function stop(){
      loop.removeAnimation(this.handle);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
}
