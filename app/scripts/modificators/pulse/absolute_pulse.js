import checkParameter from '~/internal/check_parameter';
import abstractModificator from '~/modificators/abstract_modificator';
import loop from '~/loop';

export default function(options){

  checkParameter(options, 'begin', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'property', true);

  var restartPulse = abstractModificator(options);
  restartPulse.begin = options.begin;
  restartPulse.speed = options.speed;
  restartPulse.property = options.property;
  restartPulse._higher = null;
  restartPulse._current = restartPulse.begin;
  restartPulse._listener = null;

  restartPulse.pulse = function(amount){
    if(this._listener){
      loop.removeAnimation(this._listener);
      this._listener = false;
    }
    this._higher = (amount > this.begin);
    this._current = amount;
    this._listener = loop.addAnimation(this._handle, this);
  };

  restartPulse._handle = function(event){
    if(this._higher){
      this._current = this._current - (event.delta / 1000) * this.speed;
      if(this._current <= this.begin){
        this._stopPulse();
      }
    }else{
      this._current = this._current + (event.delta / 1000) * this.speed;
      if(this._current >= this.begin){
        this._stopPulse();
      }
    }
    this._handleCurrent();
  };

  restartPulse._stopPulse = function(){
    loop.removeAnimation(this._listener);
    this._listener = false;
    this._current = this.begin;
  };

  restartPulse._handleCurrent = function(){
    this.subject[this.property] = this._current;
  };

  return restartPulse;
}
