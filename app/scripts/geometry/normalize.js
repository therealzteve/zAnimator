export default function(vector){
    var normalizedVector = [];
    var squareSum = 0;
    for(var entry of vector){
      squareSum += (entry * entry);
    }
    var length = Math.sqrt(squareSum);

    for(var i = 0; i < vector.length; i++){
      normalizedVector[i] = vector[i] / length;
    }

    return normalizedVector;
}
