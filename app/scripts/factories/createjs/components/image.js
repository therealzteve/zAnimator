import checkParameter from '~/internal/check_parameter';


export default function(options) {

  checkParameter(options, 'source', true);

  var image = {
    view: new createjs.Bitmap(options.source),
    scale: 0.5
  };

  image.draw = function() {
    image.view.scaleX = image.scale;
    image.view.scaleY = image.scale;
  };

  image.draw();
  return image;
}
