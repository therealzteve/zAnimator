import addUpPoints from '~/geometry/add_up_points';

export default function pathConstructor(){

  var path = {};

  path.subPaths = [];

  path.getEdgePoints = function(){
    var edgePoints = [];
    edgePoints.push({x: 0, y: 0});
    for(var subPath of path.subPaths){
      edgePoints.push(addUpPoints(edgePoints[edgePoints.length - 1], subPath.getEdgePoint()));
    }
    return edgePoints;
  };

  path.getStartPointOf = function(subPath){
    var startPoint = ({x: 0, y: 0});

    for(var currentPath of path.subPaths){
      if(currentPath === subPath){
        return startPoint;
      }else{
        startPoint = addUpPoints(startPoint, currentPath.getEdgePoint());
      }
    }
  };

  path.getPoint = function(progress){
    var lengthPoint = progress * path.getLength();
    for(var subPath of path.subPaths){
      if(lengthPoint > subPath.getLength()){
        lengthPoint -= subPath.getLength();
      }else{
        return addUpPoints(subPath.getPoint((lengthPoint / subPath.getLength()) ), path.getStartPointOf(subPath));
      }
    }
  };

  path.getLength = function(){
    var length = 0;
    for(var subPath of path.subPaths){
      length += subPath.getLength();
    }
    return length;
  };

  path.getPartPath = function(progress){
    var newSubPaths = [];
    var lengthPoint = progress * path.getLength();
    var subPathsRetrieved = false;
    var currentPath = 0;

    while(!subPathsRetrieved){
      if(lengthPoint > path.subPaths[currentPath].getLength()){
        lengthPoint -= path.subPaths[currentPath].getLength();
        newSubPaths.push(path.subPaths[currentPath].getPartPath(1));
        currentPath = currentPath + 1;
      }else{
        newSubPaths.push(path.subPaths[currentPath].getPartPath((lengthPoint / path.subPaths[currentPath].getLength())));
        subPathsRetrieved = true;
      }
    }

    var partPath = pathConstructor();
    partPath.subPaths = newSubPaths;
    return partPath;

  }

  return path;

}
