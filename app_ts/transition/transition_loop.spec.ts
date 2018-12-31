import { expect } from 'chai';
import 'mocha';

import TransitionLoop from './transition_loop';
import loopService from '../loop/loop.service';
import mockTicker from '../_test_utils/mock_ticker';
import Loop from '../loop/loop';
import { MsInterval } from '../timer/interval';

describe('TransitionLoop test suite', function() {

  before(function() {
    loopService.setLoop(new Loop(mockTicker));
  });

  describe('start function', () => {
    it('should add transition callback to loop', (done) => {

      // Arrange
      let transitionLoop = new TransitionLoop(new MsInterval(100));

      transitionLoop.addCallback((progress) => {
        done();
      });

      // Act
      transitionLoop.start();
      mockTicker.tick(1);

    });

  });

  describe('stop function', () => {
    it('should remove transition callback from loop', () => {

      // Arrange
      let transitionLoop = new TransitionLoop(new MsInterval(100));

      transitionLoop.addCallback((progress) => {
        expect.fail();
      });

      // Act
      transitionLoop.start();
      transitionLoop.stop();
      mockTicker.tick(1);

    });
  });

  describe('handleTransition function', () => {
    it('should call added callback with correct step', (done) => {

      // Arrange
      let transitionLoop = new TransitionLoop(new MsInterval(100));

      transitionLoop.addCallback((progress) => {
        expect(progress).to.equal(0);
        done();
      });

      // Act
      transitionLoop.start();
      mockTicker.tick({"delta": 0});

    });
  });

});
