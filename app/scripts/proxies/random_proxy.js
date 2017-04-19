import abstractProxy from './abstract_proxy';

export default function(){
  var proxy = abstractProxy();

  proxy.setProp = function(name, value){
      var randomElementIndex = Math.floor(Math.random() * this.group.length);
      proxy._setPropOfElement(this.group[randomElementIndex], name, value);
  };

  return proxy;
}
