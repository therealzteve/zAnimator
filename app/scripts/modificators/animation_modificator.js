import loop from '~/loop';

export default function(modificator){

    /* Public functions */
    function start(){
      loop.addAnimation(modificator.handle);
    }

    function stop(){
      loop.removeAnimation(modificator.handle);
    }

    modificator.start = start;
    modificator.stop = stop;

    return modificator;
}
