import checkParameter from '~/internal/check_parameter';
import rectShape from '~/geometry/shapes/rectangle';
import rect from '~/factories/createjs/components/rectangle';
import container from '~/factories/createjs/components/container';
import color from 'color';

export default function(options){
  checkParameter(options, 'width', true);
  checkParameter(options, 'height', false, 0);
  checkParameter(options, 'baseColor', false, '#000');

  var simpleSoundBar = {};
  simpleSoundBar.width = options.width;
  simpleSoundBar.height = options.height;
  simpleSoundBar.baseColor = options.baseColor;
  simpleSoundBar.current = 0;
  simpleSoundBar.view = container();
  simpleSoundBar.rect = rect({rectangleShape: rectShape({width: simpleSoundBar.width, height: 0 }), color: simpleSoundBar.baseColor});
  simpleSoundBar.view.addChild(simpleSoundBar.rect.view);

  simpleSoundBar.draw = function(){
    var colorObject = color(this.baseColor);
    var colorRange = {
      r: 255 - colorObject.red(),
      g: 255 - colorObject.green(),
      b: 255 - colorObject.blue()
    };

    colorObject.red(colorObject.red() + this.current * colorRange.r);
    colorObject.green(colorObject.green() + this.current * colorRange.g);
    colorObject.blue(colorObject.blue() + this.current * colorRange.b);

    this.rect.rectangleShape.width = this.width;
    this.rect.rectangleShape.height = this.height;
    this.rect.color = colorObject.rgbString();
    this.rect.draw();
  };

  return simpleSoundBar;

}
