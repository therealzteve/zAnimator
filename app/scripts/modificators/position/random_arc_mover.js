import arc from '~/geometry/paths/arc';
import loop from '~/loop';
import checkParameter from '~/internal/check_parameter';
import rotatePoint from '~/geometry/rotate_point';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);

  // private vars
  var currentArc = createRandomArc();
  var currentStartPosition = { x: 0, y: 0};
  var currentMs = 0;
  var currentAngle = 0;

  // private functions
  function createRandomArc(){
    return arc({degrees: Math.random() * 90, radius: 100});
  }

  var randomArcMover = {};
  randomArcMover.subject = options.subject;
  randomArcMover.speed = options.speed;

  randomArcMover.start = function(){
    loop.addAnimation(randomArcMover.handle);
  };

  randomArcMover.stop = function(){
    loop.removeAnimation(randomArcMover.handle);
  };

  randomArcMover.handle = function(event){
    var ms = event.delta;
    currentMs += ms;

    while(((currentMs / 1000) * randomArcMover.speed) >= currentArc.getLength()){
      var rotatedPoint = rotatePoint(currentArc.getPoint(1), currentAngle);
      currentStartPosition.x = currentStartPosition.x + rotatedPoint.x;
      currentStartPosition.y = currentStartPosition.y + rotatedPoint.y;
      currentMs = currentMs - (currentArc.getLength() * 1000) / randomArcMover.speed;
      currentAngle = currentArc.getAngle(1);
      currentArc = createRandomArc();
    }
    var progress = ((currentMs / 1000) * randomArcMover.speed) / currentArc.getLength();

    var position = rotatePoint(currentArc.getPoint(progress), currentAngle);
    setProp(randomArcMover.subject, 'x', currentStartPosition.x + position.x);
    setProp(randomArcMover.subject, 'y', currentStartPosition.y + position.y);
    //randomArcMover.subject.draw();
  };

  return randomArcMover;
}
