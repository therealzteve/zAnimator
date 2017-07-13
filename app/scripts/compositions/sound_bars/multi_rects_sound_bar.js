import checkParameter from '~/internal/check_parameter';
import rectShape from '~/geometry/shapes/rectangle';
import rect from '~/factories/createjs/components/rectangle';
import container from '~/factories/createjs/components/container';

export default function(options){
  checkParameter(options, 'width', true);
  checkParameter(options, 'amountRects', true );
  checkParameter(options, 'rectHeight', false, 0);
  checkParameter(options, 'spacing', false, 0);

  var simpleSoundBar = {};
  simpleSoundBar.width = options.width;
  simpleSoundBar.rectHeight = options.rectHeight;
  simpleSoundBar.spacing = options.spacing;
  simpleSoundBar.amountRects = options.amountRects;
  simpleSoundBar.current = 0;
  simpleSoundBar.view = container();

  simpleSoundBar.draw = function(){
    this.view.removeAllChildren();

    for(var i = 0; i < this.amountRects; i++){
      var fullHeight = this.rectHeight * this.amountRects + this.spacing * (this.amountRects - 1);
      var height = (this.current * this.rectHeight * this.amountRects) - i * this.rectHeight;
      if(height > this.rectHeight){
        height = this.rectHeight;
      }

      if(height < 0 ){
        height = 0;
      }

      var rectInBar = rect({rectangleShape: rectShape({width: simpleSoundBar.width, height: height})});
      rectInBar.view.y = fullHeight - (this.rectHeight + this.spacing) * i - height;
      this.view.addChild(rectInBar.view);
      rectInBar.draw();
    }

  };

  return simpleSoundBar;

}
