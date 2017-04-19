import abstractProxy from './abstract_proxy';
import checkParameter from '~/internal/check_parameter';

export default function(options) {

  checkParameter(options, 'shuffle', false, false);

  var proxy = abstractProxy();
  proxy.currentElementIndex = 0;

  proxy.setProp = function(name, value) {
    if(this.shuffle && this.currentElementIndex === 0){
      this.shuffleGroup();
    }
    this._setPropOfElement(this.group[this.currentElementIndex], name, value);

    this.currentElementIndex++;
    if (this.currentElementIndex >= this.group.length) {
      this.currentElementIndex = 0;
    }
  };

  proxy.shuffleGroup = function(){
    //TODO implement shuffle algorithm
  };

  return proxy;
}
