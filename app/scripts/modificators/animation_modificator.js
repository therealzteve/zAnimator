import loop from '~/loop';

export default function(modificator){

    /* Public functions */
    function start(){
      loop.addAnimation(this.handle);
    }

    function stop(){
      loop.removeAnimation(this.handle);
    }

    modificator.start = start;
    modificator.stop = stop;

    return modificator;
}
