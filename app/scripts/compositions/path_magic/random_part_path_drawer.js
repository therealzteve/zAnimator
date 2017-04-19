import loop from '~/loop';
import pathView from '~/factories/createjs/components/path';
import container from '~/factories/createjs/components/container';
import checkParameter from '~/internal/check_parameter';

/**
* Options:
* Path --> Path to draw
* PathOptions --> Styling options of path
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
    loop.addAnimation(this.handle);
    this.view.addChild(this.pathView.view);
  };

  pathDrawer.stop = function(){
    loop.removeAnimation(this.handle);
    this.view.removeChild(this.pathView.view);
  };

  pathDrawer.handle = function(){
      this.pathView.completePath = this.path.getPartPath(Math.random());
      this.pathView.draw();
  };

  return pathDrawer;
}
