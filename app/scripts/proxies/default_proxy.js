import abstractProxy from './abstract_proxy';

export default function(){
  var proxy = abstractProxy();


  proxy.setProp = function(name, value){
      for(var obj of proxy.group){
        proxy._setPropOfElement(obj, name, value);
      }
  };

  return proxy;
}
