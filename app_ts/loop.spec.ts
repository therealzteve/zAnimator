import { expect } from 'chai';
import loop from './loop';
import 'mocha';


describe('Loop.ts suite', () => {

  it('should add callback to ticker', (done) => {
    let my_loop;

    let mockTicker = {
      addCallback:function(func, scope){
        expect(func).to.equal(scope._handle);
      }
    };

    my_loop = new loop(mockTicker);
  });

  it('should draw added component on tick', (done) => {

    // Arrange
    var callback;
    var testScope;
    let mockTicker = {
      addCallback: function(func, scope){
        callback = func;
        testScope = scope;
      }
    };

    let my_loop = new loop(mockTicker);
    my_loop.addComponent({ draw: () =>{

      // Assert
      done();
    }});

    // Act
    callback.call(testScope);

  });

});
