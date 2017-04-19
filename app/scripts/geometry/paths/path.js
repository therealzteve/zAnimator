import addUpPoints from '~/geometry/add_up_points';

export default function pathConstructor(){

  var path = {};

  path.subPaths = [];

  path.getEdgePoints = function(){
    var edgePoints = [];
    edgePoints.push({x: 0, y: 0});
    for(var subPath of this.subPaths){
      edgePoints.push(addUpPoints(edgePoints[edgePoints.length - 1], subPath.getEdgePoint()));
    }
    return edgePoints;
  };

  path.getStartPointOf = function(subPath){
    var startPoint = ({x: 0, y: 0});

    for(var currentPath of this.subPaths){
      if(currentPath === subPath){
        return startPoint;
      }else{
        startPoint = addUpPoints(startPoint, currentPath.getEdgePoint());
      }
    }
  };

  path.getPoint = function(progress){
    var lengthPoint = progress * this.getLength();
    for(var subPath of this.subPaths){
      if(lengthPoint > subPath.getLength()){
        lengthPoint -= subPath.getLength();
      }else{
        return addUpPoints(subPath.getPoint((lengthPoint / subPath.getLength()) ), this.getStartPointOf(subPath));
      }
    }
  };

  path.getLength = function(){
    var length = 0;
    for(var subPath of this.subPaths){
      length += subPath.getLength();
    }
    return length;
  };

  path.getPartPath = function(progress){
    var newSubPaths = [];
    var lengthPoint = progress * this.getLength();
    var subPathsRetrieved = false;
    var currentPath = 0;

    while(!subPathsRetrieved){
      if(lengthPoint > this.subPaths[currentPath].getLength()){
        lengthPoint -= this.subPaths[currentPath].getLength();
        newSubPaths.push(this.subPaths[currentPath].getPartPath(1));
        currentPath = currentPath + 1;
      }else{
        newSubPaths.push(this.subPaths[currentPath].getPartPath((lengthPoint / this.subPaths[currentPath].getLength())));
        subPathsRetrieved = true;
      }
    }

    var partPath = pathConstructor();
    partPath.subPaths = newSubPaths;
    return partPath;

  };

  return path;

}
