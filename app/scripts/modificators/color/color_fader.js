import color from 'color';
import pulsar from '~/transitions/transition_loop';
import checkParameter from '~/internal/check_parameter';
import setProp from '~/internal/set_prop';

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
    this.pulsar.start(colorFader.handle);
  };

  colorFader.stop = function(){
    this.pulsar.stop();
  };

  colorFader.handle = function(current){
    this.currentColor.red(this.color1.red() + current * this.colorRange.r);
    this.currentColor.green(this.color1.green() + current * this.colorRange.g);
    this.currentColor.blue(this.color1.blue() + current * this.colorRange.b);
    setProp(this.subject, 'color', this.currentColor.rgbString() );
    this.subject.draw();
  };

  return colorFader;
}
