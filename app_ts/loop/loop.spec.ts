import { expect } from 'chai';
import loop from './loop';
import 'mocha';
import mockTicker from '../_test_utils/mock_ticker';

describe('Loop.ts suite', () => {

  it('should register it\'s handler function to the ticker', (done) => {
    let my_loop;

    let doneTicker = {
      addCallback:function(func, scope){
        expect(func).to.equal(scope._handle);
        done();
      }
    };

    my_loop = new loop(doneTicker);
  });

  it('should call "draw"-function of an added component on tick', (done) => {

    // Arrange
    let my_loop = new loop(mockTicker);
    my_loop.addComponent({ draw: () =>{

      // Assert
      done();
    }});

    // Act
    mockTicker.tick(1);

  });


  it('should call added function with correct scope on tick', (done) => {
    // Arrange

    var testObject = {
      myFunc: function(event){
        // Assert
        expect(this).to.equal(testObject);
        done();
      }
    }

    let my_loop = new loop(mockTicker);
    my_loop.addAnimation(testObject.myFunc, testObject);

    // Act
    mockTicker.tick(1);
  });


});
