import abstractProxy from './abstract_proxy';
import checkParameter from '~/internal/check_parameter';

export default function(options) {

  checkParameter(options, 'shuffle', false, false);

  var proxy = abstractProxy();
  proxy.currentElementIndex = 0;

  proxy.setProp = function(name, value) {
    if(proxy.shuffle && proxy.currentElementIndex === 0){
      proxy.shuffleGroup();
    }
    proxy._setPropOfElement(proxy.group[proxy.currentElementIndex], name, value);

    proxy.currentElementIndex++;
    if (proxy.currentElementIndex >= proxy.group.length) {
      proxy.currentElementIndex = 0;
    }
  };

  proxy.shuffleGroup = function(){
    //TODO implement shuffle algorithm
  };

  return proxy;
}
