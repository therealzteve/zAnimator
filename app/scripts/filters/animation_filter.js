import loop from '~/loop';

export default function(filter){

    filter._listener = null;
    /* Public functions */
    function start(){
      this._listener = loop.addAnimation(this.handle, this);
    }

    function stop(){
      loop.removeAnimation(this._listener);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
}
