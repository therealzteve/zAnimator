import abstractFilter from '~/filters/abstract_filter';
import pulsar from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';


export default function(options){

    checkParameter(options, 'child', true);
    checkParameter(options, 'speed', false, 1000);

    var fader = abstractFilter();
    fader.speed = options.speed;
    fader.pulsar = pulsar(fader.speed, 0.5);

    fader.view.addChild(options.child.view);

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
