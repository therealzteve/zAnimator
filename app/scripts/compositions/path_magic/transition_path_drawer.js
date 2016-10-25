import pulsar from '~/transitions/transition_loop';
import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';

export default function(path, options){
  var pathDrawer = {};
  pathDrawer.pulsar = pulsar(1000, 1);
  pathDrawer.path = path;
  pathDrawer.pathView = pathView(pathDrawer.path, options);
  pathDrawer.view = container();

  pathDrawer.start = function(){
    pathDrawer.pulsar.start(pathDrawer.handle);
    pathDrawer.view.addChild(pathDrawer.pathView.view);
  };

  pathDrawer.stop = function(){
    pathDrawer.pulsar.stop();
    pathDrawer.view.removeChild(pathDrawer.pathView.view);
  };

  pathDrawer.handle = function(current){
      pathDrawer.pathView.completePath = pathDrawer.path.getPartPath(current);
      pathDrawer.pathView.draw();
  };

  return pathDrawer;
}
