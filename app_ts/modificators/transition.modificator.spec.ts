import { expect } from 'chai';
import loopService from '../loop/loop.service';
import Loop from '../loop/loop';
import TransitionModificator from './transition.modificator';
import 'mocha';
import mockTicker from '../_test_utils/mock_ticker';
import { MsInterval } from '../timer/interval';

describe('TransitionModificator.ts suite', () => {
  it('should change someValue of testObject to 4', () =>{
    loopService.setLoop(new Loop(mockTicker));

    type test = {
      someValue: number
    };

    let testObject: test = {
      someValue: 0
    };

    let myModificator = new TransitionModificator(0, 10, new MsInterval(100));
    myModificator.subjects.push({subject: testObject, property: "someValue"});
    myModificator.start();

    mockTicker.tick({delta: 20});

    myModificator.stop();

    expect(testObject.someValue).to.equal(4);

  });

  it('should change someValue of testObject to 4 after max', () =>{
    loopService.setLoop(new Loop(mockTicker));

    type test = {
      someValue: number
    };

    let testObject: test = {
      someValue: 0
    };

    let myModificator = new TransitionModificator(0, 10, new MsInterval(100));
    myModificator.subjects.push({subject: testObject, property: "someValue"});
    myModificator.start();

    mockTicker.tick({delta: 80});

    myModificator.stop();

    expect(testObject.someValue).to.be.approximately(4, 0.001);

  });

  it('should change someValue of testObject to 4 after second period', () =>{
    loopService.setLoop(new Loop(mockTicker));

    type test = {
      someValue: number
    };

    let testObject: test = {
      someValue: 0
    };

    let myModificator = new TransitionModificator(0, 10, new MsInterval(100));
    myModificator.subjects.push({subject: testObject, property: "someValue"});
    myModificator.start();

    mockTicker.tick({delta: 120});

    myModificator.stop();

    expect(testObject.someValue).to.be.approximately(4, 0.001);

  });


});
