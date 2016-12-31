export default function(parameterObject, option, required, defaultValue){
  if(!required){
    parameterObject[option] = parameterObject.hasOwnProperty(option) ? parameterObject[option] : defaultValue;
  }else{
    if(!parameterObject.hasOwnProperty(option) ){
      throw new Error('Missing required option:' + option);
    }
  }
}
