export default function(options){

      //TODO: Add video source handling
      var image = {
        view: new createjs.Bitmap(options.source),
        scale: 0.5
      };

      image.draw = function(){
        image.view.scaleX = image.scale;
        image.view.scaleY = image.scale;
      };

      image.draw();
      return image;
}
