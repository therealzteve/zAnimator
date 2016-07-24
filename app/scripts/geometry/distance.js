export default function(vector1, vector2){
  if(vector1.length !== vector2.length){
    throw 'Cannot calculate distance of vectors with different numbers of dimensions';
  }
  var distance = 0;
  for(var i = 0; i < vector1.length; i++){
    distance += Math.pow(vector1[i] - vector2[i], 2);
  }
  return Math.sqrt(distance);
}
