import { easeInOutQuad, easeInOutBack } from 'easing-utils';

export default function(){
  var easing = {};

  easing.easeInOutQuad = function(value){
    return easeInOutQuad(value);
  };

  easing.easeInOutBack = function(value){
    return easeInOutBack(value);
  };

  easing.linear = function(value){
    return value;
  };

  easing.getValueOf = function(type, value){
    return easing[type](value);
  };

  return easing;
}
