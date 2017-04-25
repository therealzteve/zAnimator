import checkParameter from '~/internal/check_parameter';
import createLineMover from './line_mover';
import createInterval from '~/timers/interval';
import abstractModificator from '~/modificators/abstract_modificator';

import toVector from '~/geometry/to_vector';
import distance from '~/geometry/distance';

export default function(options){

  /* Parameters */
  checkParameter(options, 'speed', true);
  checkParameter(options, 'width', true);
  checkParameter(options, 'height', true);

  /* create object and set properties */
  var randomInRectMover = abstractModificator(options);
  randomInRectMover.speed = options.speed;
  randomInRectMover.width = options.width;
  randomInRectMover.height = options.height;

  // callbacks
  randomInRectMover.__onCurrentGoalReached = function(){
    this._lineMover.stop();
    this._lineMover.startPoint.x = this._lineMover.goalPoint.x;
    this._lineMover.startPoint.y = this._lineMover.goalPoint.y;

    this._lineMover.goalPoint.x = Math.random() * this.width;
    this._lineMover.goalPoint.y = Math.random() * this.height;

    this._interval.ms = this._calculateIntervalTime();

    this._lineMover.start();
  };

  // Private vars
  randomInRectMover._interval = createInterval({type: 'ms', ms: 1});
  randomInRectMover._lineMover = createLineMover({
      subject: randomInRectMover.subject,
      goalPoint: { x: 0, y: 0 },
      onFinishedInterval: function(){ randomInRectMover.__onCurrentGoalReached(); },
      interval: randomInRectMover._interval,
      steepness: 1
    });

  /* Public functions */
  randomInRectMover.start = function(){
    this.__onCurrentGoalReached();
  };

  randomInRectMover.stop = function(){
    this._lineMover.stop();
  };

  /* Private functions */
  randomInRectMover._calculateIntervalTime = function(){
    var dist = distance(toVector(this._lineMover.goalPoint), toVector(this._lineMover.startPoint));
    return (dist / this.speed) * 1000;
  };

  return randomInRectMover;
}
