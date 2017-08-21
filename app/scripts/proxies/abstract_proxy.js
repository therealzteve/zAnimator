import setProp from '~/internal/set_prop';

export default function(){
  var proxy = {};
  proxy.group = [];

  proxy.addElement = function(element){
    this.group.push(element);
  };

  proxy.removeElement = function(element){
      this.group.splice(this.group.indexOf(element), 1);
  };

  proxy.draw = function(){
    for(var element of this.group){
      element.draw();
    }
  };

  proxy._setPropOfElement = function(element, property, value){
    setProp(element, property, value, false);
  };

  proxy._run = function(element, func){
    if(!element.isProxy){
      func.call(element);
    }else{
      element.run(func);
    }
  };

  return proxy;
}
