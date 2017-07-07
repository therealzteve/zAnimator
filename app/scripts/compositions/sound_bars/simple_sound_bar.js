import checkParameter from '~/internal/check_parameter';
import rectShape from '~/geometry/shapes/rectangle';
import rect from '~/factories/createjs/components/rectangle';
import container from '~/factories/createjs/components/container';

export default function(options){
  checkParameter(options, 'width', true);
  checkParameter(options, 'height', false, 0);

  var simpleSoundBar = {};
  simpleSoundBar.width = options.width;
  simpleSoundBar.height = options.height;
  simpleSoundBar.current = 0;
  simpleSoundBar.view = container();
  simpleSoundBar.rect = rect({rectangleShape: rectShape({width: simpleSoundBar.width, height: 0 })});
  simpleSoundBar.view.addChild(simpleSoundBar.rect.view);

  simpleSoundBar.draw = function(){
    this.rect.rectangleShape.width = this.width;
    this.rect.rectangleShape.height = this.current * this.height;
    this.rect.view.y = this.height - this.rect.rectangleShape.height;
    this.rect.draw();
  };

  return simpleSoundBar;

}
