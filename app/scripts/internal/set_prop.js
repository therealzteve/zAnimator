export default function(element, property, value, doNotChain){
  if(!doNotChain){
    if(element.hasOwnProperty('setProp')){
      return element.setProp(property, value);
    }
  }

  if(element.hasOwnProperty(property)){
    element[property] = value;
  }else{
    console.log(element);
    throw new Error('Cannot set property of object. Object hasn\'t the property: ' + property);
  }
}
