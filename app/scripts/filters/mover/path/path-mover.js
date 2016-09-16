import abstractFilter from '~/filters/abstract_filter';

export default function(child, progressRate, path){

  var pathMover = abstractFilter();
  pathMover.view.addChild(child.view);
  pathMover.currentProgress = 0;
  pathMover.progressRate = progressRate;


  pathMover.handle = function(event){
    pathMover.currentProgress += pathMover.progressRate * (event.delta / 1000);
    if(pathMover.currentProgress > 1) {
      pathMover.currentProgress -= 1;
    }
    var point = path.getPoint(pathMover.currentProgress);
    pathMover.view.x = point.x;
    pathMover.view.y = point.y;
  };

  return pathMover;
}
