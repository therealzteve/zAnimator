import checkParameter from '~/internal/check_parameter';
import container from '~/factories/createjs/components/container';
import randomRectangleGroup from '~/filters/group/random_rectangle_group';
import circle from '~/factories/createjs/components/circle';
import circleShape from '~/geometry/shapes/circle';
import fadeShot from './fade_shot';
import intervalProxy from '~/proxies/interval_proxy';

export default function(options){
  checkParameter(options, 'echoRadius', true);
  checkParameter(options, 'amountEchoCircles', true);
  checkParameter(options, 'mainRadius', true);
  checkParameter(options, 'echoCircleRadius, true');
  checkParameter(options, 'interval', true);

  var echoCircle = {};
  echoCircle.echoRadius = options.echoRadius;
  echoCircle.amountEchoCircles = options.amountEchoCircles;
  echoCircle.mainRadius = options.mainRadius;
  echoCircle.echoCircleRadius = options.echoCircleRadius;
  echoCircle._active = false;
  echoCircle._echoCircles = [];
  echoCircle._echoCirlcesPositionFilter = randomRectangleGroup({'width': echoCircle.echoRadius, 'height': echoCircle.echoRadius, 'children': echoCircle._echoCircles});
  echoCircle._intervalProxy = intervalProxy({'interval': options.interval});
  echoCircle._intervalProxy.group = echoCircle._echoCircles;

  echoCircle.view = container();
  echoCircle.view.addChild(echoCircle._echoCirlcesPositionFilter.view);

  echoCircle.pulse = function(){
    this._echoCircles.length = 0;
    for(var i = 0; i < this.amountEchoCircles; i++){
      var newCircleShot = fadeShot({'child': circle({'circleShape': circleShape({'radius': this.echoCircleRadius})}), 'interval': options.interval});
      this._echoCircles.push(newCircleShot);
    }
    this._echoCirlcesPositionFilter.refresh();
    this._intervalProxy.run(function(){
      this.pulse();
    });
  };

  return echoCircle;

}
