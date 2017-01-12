import loop from '~/loop';
import randomColor from 'randomColor';
import checkParameter from '~/internal/check_parameter';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'subject', true);

  var randomColorChanger = {};
  randomColorChanger.subject = options.subject;

  randomColorChanger.start = function(){
    loop.addAnimation(randomColorChanger.handle);
  };

  randomColorChanger.stop = function(){
    loop.removeAnimation(randomColorChanger.handle);
  };

  randomColorChanger.handle = function(){
    setProp(randomColorChanger.subject, 'color', randomColor());
    randomColorChanger.subject.draw();
  };

  return randomColorChanger;
}
