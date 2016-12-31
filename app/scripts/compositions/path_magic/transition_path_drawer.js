import pulsar from '~/transitions/transition_loop';
import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import checkParameter from '~/internal/check_parameter';

/**
* Options:
* path --> the path to draw
* pathOptions --> the options for drawing the path
*/
export default function(options){
  var pathDrawer = {};

  // Handle Parameters
  checkParameter(options, 'path', true);
  checkParameter(options, 'pathOptions', true);
  options.pathOptions.path = options.path;
  pathDrawer.path = options.path;

  // Init
  pathDrawer.pulsar = pulsar(1000, 1);
  pathDrawer.pathView = pathView(options.pathOptions);
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
