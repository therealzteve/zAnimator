import color from 'color';
import pulsar from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);
  checkParameter(options, 'color1', true);
  checkParameter(options, 'color2', true);

  var colorFader = {};
  colorFader.subject = options.subject;
  colorFader.speed = options.speed;
  colorFader.color1 = color(options.color1);
  colorFader.color2 = color(options.color2);
  colorFader.currentColor = color(options.color1);
  colorFader.pulsar = pulsar(colorFader.speed, 0.5);

  colorFader.colorRange = {
    r: colorFader.color2.red() - colorFader.color1.red(),
    g: colorFader.color2.green() - colorFader.color1.green(),
    b: colorFader.color2.blue() - colorFader.color1.blue()
  };

  colorFader.start = function(){
    colorFader.pulsar.start(colorFader.handle);
  };

  colorFader.stop = function(){
    colorFader.pulsar.stop();
  };

  colorFader.handle = function(current){
    colorFader.currentColor.red(colorFader.color1.red() + current * colorFader.colorRange.r);
    colorFader.currentColor.green(colorFader.color1.green() + current * colorFader.colorRange.g);
    colorFader.currentColor.blue(colorFader.color1.blue() + current * colorFader.colorRange.b);
    colorFader.subject.color = colorFader.currentColor.rgbString();
    colorFader.subject.draw();
  };

  return colorFader;
}
