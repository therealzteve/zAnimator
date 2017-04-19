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
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  pathDrawer.stop = function(){
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  pathDrawer.handle = function(current){
      this.pathView.completePath = this.path.getPartPath(current);
      this.pathView.draw();
  };

  return pathDrawer;
}
