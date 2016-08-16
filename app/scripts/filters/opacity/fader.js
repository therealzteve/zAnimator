import abstractFilter from '~/filters/abstract_filter';
import pulsar from '~/transitions/pulsar_transition';

export default function(child, speed, increase){
    var fader = abstractFilter();

    /* Params and defaults */
    fader.speed = speed ? speed : 1000;
    fader.view.addChild(child.view);
    fader.pulsar = pulsar(fader.speed, 0.5);

    function handle(current){
      fader.view.alpha = current;
    }

    fader.start = function(){
      fader.pulsar.start(handle);
    };

    fader.stop = function(){
      fader.pulsar.stop();
    };

    return fader;
}
