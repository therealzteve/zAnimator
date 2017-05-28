import loop from '~/loop';

export default function(modificator){

    modificator._listener = null;

    /* Public functions */
    function start(){
      this._listener = loop.addAnimation(this.handle, this);
    }

    function stop(){
      loop.removeAnimation(this._listener);
    }

    modificator.destroy = function(){
      this.stop();
      this.subject = null;
    };

    modificator.start = start;
    modificator.stop = stop;

    return modificator;
}
