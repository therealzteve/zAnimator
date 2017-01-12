import setProp from '~/internal/set_prop';

export default function(){
  var proxy = {};
  proxy.group = [];

  proxy.addElement = function(element){
    proxy.group.push(element);
  };

  proxy.removeElement = function(element){
      proxy.group.splice(proxy.group.indexOf(element), 1);
  };

  proxy.draw = function(){
    for(var element of proxy.group){
      element.draw();
    }
  };

  proxy._setPropOfElement = function(element, property, value){
    setProp(element, property, value, false);
  };

  return proxy;
}
