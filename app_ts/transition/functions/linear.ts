import { Interval } from "../../timer/interval";

export default function linearFunc(interval: Interval, steepness: number){
  return function(ms: number){
    let stepWithoutSteepness = (ms /interval.getMs()) % 1;

    if(steepness === 1){
      return stepWithoutSteepness;
    }

    if(stepWithoutSteepness === 0 && steepness === 0){
      return 1;
    }

    if(stepWithoutSteepness <= steepness){
      return stepWithoutSteepness / steepness;
    }else{
      return 1 - (stepWithoutSteepness - steepness) / (1 - steepness);
    }
  };
}
