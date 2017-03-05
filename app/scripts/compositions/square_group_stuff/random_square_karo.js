import checkParameter from '~/internal/check_parameter';
import rectangleGroup from '~/filters/group/rectangle_group';

export default function(options){
  var randomKaroSwitch = {};

  checkParameter(options, 'columns', true);
  checkParameter(options, 'visible', true);
  checkParameter(options, 'spacing', false);
  checkParameter(options, 'children', false, []);

  var group = rectangleGroup({'children': options.children, 'columns': options.columns, 'spacing': options.spacing});

  randomKaroSwitch.view = group.view;

  randomKaroSwitch.switch = function(){
    var randomNumbers = [];
    for(var i = 0; i < options.children.length; i++){
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for(var j = 0; j < options.children.length; j++){
      if(j < options.visible ){
        group.children[randomNumbers[j]].view.alpha = 0;
      }else{
        group.children[randomNumbers[j]].view.alpha = 1;
      }
    }
  };

  function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  return randomKaroSwitch;
}
