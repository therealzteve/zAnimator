import checkParameter from '~/internal/check_parameter';
import rectangleGroup from '~/filters/group/rectangle_group';

export default function(options){


  checkParameter(options, 'columns', true);
  checkParameter(options, 'visible', true);
  checkParameter(options, 'spacing', false);
  checkParameter(options, 'children', false, []);

  var randomKaroSwitch = {};
  randomKaroSwitch.children = options.children;
  randomKaroSwitch.visible = options.visible;
  randomKaroSwitch.spacing = options.spacing;
  randomKaroSwitch.columns = options.columns;
  randomKaroSwitch._group = rectangleGroup({'children': randomKaroSwitch.children, 'columns': randomKaroSwitch.columns, 'spacing': randomKaroSwitch.spacing});

  randomKaroSwitch.view = randomKaroSwitch._group.view;

  randomKaroSwitch.switch = function(){
    var randomNumbers = [];
    for(var i = 0; i < this.children.length; i++){
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for(var j = 0; j < this.children.length; j++){
      if(j < this.visible ){
        this._group.children[randomNumbers[j]].view.alpha = 0;
      }else{
        this._group.children[randomNumbers[j]].view.alpha = 1;
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
