import checkParameter from '~/internal/check_parameter';
import rectangleGroup from '~/filters/group/rectangle_group';
import zoomOut from '~/compositions/zoom_stuff/zoom_out';

export default function(options){
  var randomKaroSwitch = {};
  var zoomOutComponents = [];

  checkParameter(options, 'columns', true);
  checkParameter(options, 'visible', true);
  checkParameter(options, 'spacing', false);
  checkParameter(options, 'zoomSpeed', true);
  checkParameter(options, 'children', false, []);
  var group = rectangleGroup({'children': options.children, 'columns': options.columns, 'spacing': options.spacing});
  for(var child of group.children){
      zoomOutComponents.push(zoomOut({subject: child, speed:  options.zoomSpeed}));
  }

  randomKaroSwitch.view = group.view;

  randomKaroSwitch.zoomOut = function(){
    var randomNumbers = [];
    for(var i = 0; i < options.children.length; i++){
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for(var j = 0; j < options.children.length; j++){
      if(j < options.visible ){
        zoomOutComponents[randomNumbers[j]].start();
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
