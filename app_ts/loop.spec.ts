import { expect } from 'chai';
import loop from './loop';
import 'mocha';

describe('Loop.ts suite', () => {

  it('should register it\'s handler function to the ticker', (done) => {
    let my_loop;

    let mockTicker = {
      addCallback:function(func, scope){
        expect(func).to.equal(scope._handle);
        done();
      }
    };

    my_loop = new loop(mockTicker);
  });

  it('should call "draw"-function of an added component on tick', (done) => {

    // Arrange
    let mockTicker = createMockTicker();

    let my_loop = new loop(mockTicker);
    my_loop.addComponent({ draw: () =>{

      // Assert
      done();
    }});

    // Act
    mockTicker.tick();

  });


  it('should call added function with correct scope on tick', (done) => {
    // Arrange
    let mockTicker = createMockTicker();

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
    mockTicker.tick();
  });


  function createMockTicker(){
    return {
      addCallback: function(func, scope){
        this.callback = func;
        this.testScope = scope;
      },
      tick: function(){
        this.callback.call(this.testScope);
      }
    };
  };

});
