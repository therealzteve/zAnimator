import checkParameter from '~/internal/check_parameter';
import abstractShape from './abstract_shape';

export default function(options) {

  checkParameter(options, 'source', true);

  var image = abstractShape();
  image.view = new createjs.Bitmap(options.source);


  image.draw = function() {
    image.view.scaleX = image.scale;
    image.view.scaleY = image.scale;
  };

  image.draw();
  return image;
}
