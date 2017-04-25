export default function(parameterObject, option, required, defaultValue){
  if(!required){
    parameterObject[option] = (parameterObject.hasOwnProperty(option) && typeof parameterObject[option] !== 'undefined') ? parameterObject[option] : defaultValue;
  }else{
    if(!parameterObject.hasOwnProperty(option) || typeof parameterObject[option] === 'undefined'){
      throw new Error('Missing required option:' + option);
    }
  }
}
