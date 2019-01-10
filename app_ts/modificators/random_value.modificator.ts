import Modificator, { Subject } from './modificator.interface';
import loopService from '../loop/loop.service';

export default class implements Modificator {

    public changeProbability:number = 1;
    public valueList: Array<any>;

    public subjects: Array<Subject<any>> = [];

    constructor(valueList: Array<any>){
      this.valueList = valueList;
    }

    public handle():void {
      if(Math.random() < this.changeProbability){
        for(let subject of this.subjects){
          subject.subject[subject.property] = this.valueList[Math.floor(Math.random() * this.valueList.length)];
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
