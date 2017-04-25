import randomRectGroupSwitch from './random_square_switch';
import checkParameter from '~/internal/check_parameter';
import timer from '~/timers/interval_timer';

export default function(options){

  checkParameter(options, 'interval', true);
  checkParameter(options, 'columns', true);
  checkParameter(options, 'visible', true);
  checkParameter(options, 'spacing', false);
  checkParameter(options, 'children', false, []);


  var switchInterval = {};

  switchInterval._groupSwitch = randomRectGroupSwitch(options);
  switchInterval._groupSwitchTimer = timer(options.interval);
  switchInterval._listener = null;

  switchInterval.start = function(){
    this._listener = this._groupSwitchTimer.addListener(this.handle, this);
    this._groupSwitchTimer.start();
  };

  switchInterval.stop = function(){
    this._groupSwitchTimer.stop();
    this._groupSwitchTimer.removeListener(this._listener);
  };

  switchInterval.view = switchInterval._groupSwitch.view;

  switchInterval.handle = function(){
    this._groupSwitch.switch();
  };

  return switchInterval;
}
