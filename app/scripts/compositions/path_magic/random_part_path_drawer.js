import loop from '~/loop';
import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';

export default function(path){
  var pathDrawer = {};
  pathDrawer.path = path;
  pathDrawer.pathView = pathView(pathDrawer.path, '#000');
  pathDrawer.view = container();

  pathDrawer.start = function(){
    loop.addAnimation(pathDrawer.handle);
    pathDrawer.view.addChild(pathDrawer.pathView.view);
  };

  pathDrawer.stop = function(){
    loop.removeAnimation(pathDrawer.handle);
    pathDrawer.view.removeChild(pathDrawer.pathView.view);
  };

  pathDrawer.handle = function(){
      pathDrawer.pathView.completePath = pathDrawer.path.getPartPath(Math.random());
      pathDrawer.pathView.draw();
  };

  return pathDrawer;
}
