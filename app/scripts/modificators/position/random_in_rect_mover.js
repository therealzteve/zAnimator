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

  // callbacks
  var onCurrentGoalReached = function(){
    lineMover.stop();
    lineMover.startPoint.x = lineMover.goalPoint.x;
    lineMover.startPoint.y = lineMover.goalPoint.y;

    lineMover.goalPoint.x = Math.random() * options.width;
    lineMover.goalPoint.y = Math.random() * options.height;

    interval.ms = calculateIntervalTime();

    lineMover.start();
  };

  // private vars
  var interval = createInterval({type: 'ms', ms: 1});
  var lineMover = createLineMover({
      subject: randomInRectMover.subject,
      goalPoint: { x: 0, y: 0 },
      onFinishedInterval: onCurrentGoalReached,
      interval: interval,
      steepness: 1
    });


  /* Public functions */
  randomInRectMover.start = function(){
    onCurrentGoalReached();
  };

  randomInRectMover.stop = function(){
    lineMover.stop();
  };

  /* Private functions */
  function calculateIntervalTime(){
    var dist = distance(toVector(lineMover.goalPoint), toVector(lineMover.startPoint));
    return (dist / randomInRectMover.speed) * 1000;
  }

  return randomInRectMover;
}
