import addUpPoints from '~/geometry/add_up_points';

export default function(){

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

  return path;

}
