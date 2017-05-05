import checkParameter from '~/internal/check_parameter';
import rectangleGroup from '~/filters/group/rectangle_group';
import zoomOut from '~/compositions/zoom_stuff/zoom_out';

export default function(options){

  checkParameter(options, 'columns', true);
  checkParameter(options, 'visible', true);
  checkParameter(options, 'spacing', false);
  checkParameter(options, 'zoomSpeed', true);
  checkParameter(options, 'children', false, []);

  var randomKaroSwitch = {};
  randomKaroSwitch.columns = options.columns;
  randomKaroSwitch.visible = options.visible;
  randomKaroSwitch.spacing = options.spacing;
  randomKaroSwitch.zoomSpeed = options.zoomSpeed;
  randomKaroSwitch.children = options.children;
  randomKaroSwitch._zoomOutComponents = [];

  for(var child of randomKaroSwitch.children){
      randomKaroSwitch._zoomOutComponents.push(zoomOut({child: child, interval: randomKaroSwitch.zoomSpeed}));
  }
  var group = rectangleGroup({'children': randomKaroSwitch._zoomOutComponents, 'columns': randomKaroSwitch.columns, 'spacing': randomKaroSwitch.spacing});


  randomKaroSwitch.view = group.view;

  randomKaroSwitch.zoomOut = function(){
    var randomNumbers = [];
    for(var i = 0; i < this.children.length; i++){
      randomNumbers.push(i);
      this._zoomOutComponents[i].reset();
    }
    shuffle(randomNumbers);
    for(var j = 0; j < this.children.length; j++){
      if(j < this.visible ){
        this._zoomOutComponents[randomNumbers[j]].start();
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
