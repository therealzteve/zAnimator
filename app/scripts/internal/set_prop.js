export default function(element, property, value, doNotChain){
  if(!doNotChain){
    if(element.hasOwnProperty('setProp')){
      return element.setProp(property, value);
    }
  }

  if(element.hasOwnProperty(property)){
    element[property] = value;
    if(element.sendEvent){
      element.sendEvent('property_change');
    }
  }else{
    throw new Error('Cannot set property of object. Object hasn\'t the property: ' + property);
  }
}
