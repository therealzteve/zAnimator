import loop from '~/loop';
import randomColor from 'randomColor';

export default function(subject){
  var randomColorChanger = {};
  randomColorChanger.subject = subject;

  randomColorChanger.start = function(){
    loop.addAnimation(randomColorChanger.handle);
  };

  randomColorChanger.stop = function(){
    loop.removeAnimation(randomColorChanger.handle);
  };

  randomColorChanger.handle = function(){
    randomColorChanger.subject.color = randomColor();
    randomColorChanger.subject.draw();
  };

  return randomColorChanger;
}
