import abstractFilter from '~/filters/abstract_filter';

export default function(child, speed, increase){
    var fader = abstractFilter();

    /* Params and defaults */
    fader.speed = speed ? speed : 1;
    fader.increase = increase ? increase : true;
    fader.view.addChild(child.view);

    function handle(event){
      if(fader.increase){
        handleIncrease(event);
      }else{
        handleDecrease(event);
      }
    }

    fader.handle = handle;


    /* Private functions */
    var handleIncrease = function(event){
      fader.view.alpha = fader.view.alpha + fader.speed * (event.delta / 1000);
      if(fader.view.alpha >= 1){
        fader.view.alpha = 1;
        fader.increase = false;
      }
    };

    var handleDecrease = function(event){
      fader.view.alpha = fader.view.alpha - fader.speed * (event.delta / 1000);
      if(fader.view.alpha <= 0){
        fader.view.alpha = 0;
        fader.increase = true;
      }
    };

    return fader;
}
