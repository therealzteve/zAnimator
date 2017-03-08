import randomRectGroupSwitch from './random_square_switch';
import checkParameter from '~/internal/check_parameter';
import timer from '~/timers/interval_timer';

export default function(options){

  checkParameter(options, 'interval', true);
  checkParameter(options, 'columns', true);
  checkParameter(options, 'visible', true);
  checkParameter(options, 'spacing', false);
  checkParameter(options, 'children', false, []);

  var groupSwitch = randomRectGroupSwitch(options);
  var groupSwitchTimer = timer(options.interval);
  var switchInterval = {};

  switchInterval.start = function(){
    groupSwitchTimer.addListener(handle);
    groupSwitchTimer.start();
  };

  switchInterval.stop = function(){
    groupSwitchTimer.stop();
    groupSwitchTimer.removeListener(handle);
  };

  switchInterval.view = groupSwitch.view;

  function handle(){
    groupSwitch.switch();
  }

  return switchInterval;
}
