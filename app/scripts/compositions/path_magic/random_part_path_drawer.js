import loop from '~/loop';
import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import checkParameter from '~/internal/check_parameter';

/**
* Options:
* Path --> Path to draw
*/
export default function(options){
  var pathDrawer = {};

  // Handle parameters:
  checkParameter(options, 'path', true);
  checkParameter(options, 'pathOptions', false, {});
  pathDrawer.path = options.path;
  options.pathOptions.path = pathDrawer.path;

  // Init
  pathDrawer.pathView = pathView(options.pathOptions);
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
