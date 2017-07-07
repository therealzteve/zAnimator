import checkParameter from '~/internal/check_parameter';
import rectShape from '~/geometry/shapes/rectangle';
import rect from '~/factories/createjs/components/rectangle';
import container from '~/factories/createjs/components/container';

export default function(options){
  checkParameter(options, 'width', true);
  checkParameter(options, 'amountRects', true );
  checkParameter(options, 'height', false, 0);
  checkParameter(options, 'spacing', false, 0);

  var simpleSoundBar = {};
  simpleSoundBar.width = options.width;
  simpleSoundBar.height = options.height;
  simpleSoundBar.spacing = options.spacing;
  simpleSoundBar.amountRects = options.amountRects;
  simpleSoundBar.current = 0;
  simpleSoundBar.view = container();
  simpleSoundBar.rect = rect({rectangleShape: rectShape({width: simpleSoundBar.width, height: 0 })});
  simpleSoundBar.view.addChild(simpleSoundBar.rect.view);

  simpleSoundBar.draw = function(){
    this.view.removeAllChildren();
    var singleBarHeight = (this.height + this.spacing) / this.amountRects - this.spacing;
    console.log(singleBarHeight);
    for(var i = 0; i < this.amountRects; i++){
      var height = (this.current * singleBarHeight * this.amountRects) - (i / this.amountRects) * singleBarHeight * this.amountRects;
      if(height > singleBarHeight){
        height = singleBarHeight;
      }
      console.log(height);

      var rectInBar = rect({rectangleShape: rectShape({width: simpleSoundBar.width, height: height})});
      rectInBar.view.y = this.height - (singleBarHeight + this.spacing) * i;
      this.view.addChild(rectInBar.view);
      rectInBar.draw();
    }

  };

  return simpleSoundBar;

}
