import loop from '~/loop';
import randomColor from 'randomColor';
import checkParameter from '~/internal/check_parameter';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'subject', true);

  var randomColorChanger = {};
  randomColorChanger.subject = options.subject;

  randomColorChanger.start = function(){
    loop.addAnimation(this.handle);
  };

  randomColorChanger.stop = function(){
    loop.removeAnimation(this.handle);
  };

  randomColorChanger.handle = function(){
    setProp(this.subject, 'color', randomColor());
    this.subject.draw();
  };

  return randomColorChanger;
}
