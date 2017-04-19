import arc from '~/geometry/paths/arc';
import loop from '~/loop';
import checkParameter from '~/internal/check_parameter';
import rotatePoint from '~/geometry/rotate_point';
import setProp from '~/internal/set_prop';

export default function(options){

  checkParameter(options, 'subject', true);
  checkParameter(options, 'speed', true);

  var randomArcMover = {};
  // private vars
  randomArcMover._currentArc = createRandomArc();
  randomArcMover._currentStartPosition = { x: 0, y: 0};
  randomArcMover._currentMs = 0;
  randomArcMover._currentAngle = 0;
  randomArcMover.subject = options.subject;
  randomArcMover.speed = options.speed;

  // private functions
  randomArcMover._createRandomArc = function(){
    return arc({degrees: (Math.random() * 360) - 180, radius: 25});
  };

  randomArcMover.start = function(){
    loop.addAnimation(this.handle);
  };

  randomArcMover.stop = function(){
    loop.removeAnimation(this.handle);

    // Reset everything
    this._currentArc = createRandomArc();
    this._currentStartPosition = { x: 0, y: 0};
    this._currentMs = 0;
    this._currentAngle = 0;
  };

  randomArcMover.handle = function(event){
    var ms = event.delta;
    this._currentMs += ms;

    while(((currentMs / 1000) * this.speed) >= this.getLength()){
      var rotatedPoint = rotatePoint(this._currentArc.getPoint(1), this._currentAngle);
      this._currentStartPosition.x = this._currentStartPosition.x + rotatedPoint.x;
      this._currentStartPosition.y = this._currentStartPosition.y + rotatedPoint.y;
      this._currentMs = this._currentMs - (this._currentArc.getLength() * 1000) / this.speed;
      this._currentAngle = this._currentAngle + this._currentArc.getAngle(1);
      this._currentArc = createRandomArc();
    }
    var progress = ((this._currentMs / 1000) * this.speed) / this._currentArc.getLength();

    var position = rotatePoint(currentArc.getPoint(progress), this._currentAngle);
    setProp(this.subject, 'x', this._currentStartPosition.x + position.x);
    setProp(this.subject, 'y', this._currentStartPosition.y + position.y);
    //randomArcMover.subject.draw();
  };

  return randomArcMover;
}
