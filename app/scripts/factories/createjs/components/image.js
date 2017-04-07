import checkParameter from '~/internal/check_parameter';
import abstractShape from './abstract_shape';

export default function(options) {

  checkParameter(options, 'source', true);

  var image = abstractShape();
  image.view = new createjs.Bitmap(options.source);


  image.draw = function() {
    this.view.scaleX = this.scale;
    this.view.scaleY = this.scale;
  };

  image.draw();
  return image;
}
