import { expect } from 'chai';
import loopService from './loop.service';
import Loop from './loop';
import 'mocha';
import mockTicker from '../_test_utils/mock_ticker';

describe('Loop service test suite', () => {
  it('should replace original loop', () =>{
    let newLoop = new Loop(mockTicker);
    loopService.setLoop(newLoop);

    expect(newLoop).to.equal(loopService.loop);

  });

});
