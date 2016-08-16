import color from 'color';
import pulsar from '~/transitions/pulsar_transition';

export default function(subject, speed, color1, color2){
  var colorFader = {};
  colorFader.subject = subject;
  colorFader.speed = speed;
  colorFader.color1 = color(color1);
  colorFader.color2 = color(color2);
  colorFader.currentColor = color(color1);
  colorFader.pulsar = pulsar(colorFader.speed, 1);

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
