import Modificator, { Subject } from './modificator.interface';
import loopService from '../loop/loop.service';


export type RandomValueSubject = Subject<any> & {
  range?: { min: number, max: number},
  valueList?: Array<any>
}

export default class implements Modificator {

    public changeProbability:number = 1;
    public valueList: Array<any>;
    public range: { min: number, max: number};

    public subjects: Array<RandomValueSubject> = [];

    constructor(valueList?: Array<any>){
      this.valueList = valueList;
    }

    public handle(): void {
      if(Math.random() < this.changeProbability){
        for(let subject of this.subjects){
          let randomValue = Math.random();
          if(typeof subject.range !== "undefined" || typeof subject.valueList !== "undefined"){
            setValueOfObject(subject, subject, randomValue);
          }else {
            setValueOfObject(subject, this, randomValue);
          }
        }
      }
    }

    public start(){
      loopService.loop.addAnimation(this.handle, this);
    }

    public stop(){
      loopService.loop.removeAnimation(this.handle);
    }
}

function setValueOfObject(subject, functionParams, value) {
  if(typeof functionParams.range !== "undefined"){
    subject.subject[subject.property] = functionParams.range.min + value * (functionParams.range.max - functionParams.range.min);
  } else {
    subject.subject[subject.property] = functionParams.valueList[Math.floor(value * functionParams.valueList.length)];
  }
}
