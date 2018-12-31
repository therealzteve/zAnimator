import Loop from './loop';
import createjsLoop from './createjs.loop';

export type LoopService = {
  loop: Loop,
  setLoop(loop:Loop)
};

let myLoopService: LoopService =  {
  loop: createjsLoop,
  setLoop(loop:Loop){
    this.loop = loop;
  }
};

export default myLoopService;
