import abstractProxy from './abstract_proxy';

export default function(){
  var proxy = abstractProxy();

  proxy.setProp = function(name, value){
      var randomElementIndex = Math.floor(Math.random() * proxy.group.length);
      proxy._setPropOfElement(proxy.group[randomElementIndex], name, value);
  };

  return proxy;
}
