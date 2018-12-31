import { expect } from 'chai';
import 'mocha';
import CallbackSupport from './callback_support';

describe('CallbackSupport test suite', () => {

  it('should add callback function to the list', () => {

    // Arrange
    let callbackSupport = new CallbackSupport<any>();

    // Act
    callbackSupport.addCallback(() => {

    });

    // Assert
    expect(callbackSupport.getCallbacks().length).to.eq(1);
  });


  it('should add callback function to the list and remove it after', () => {

    // Arrange
    let callbackSupport = new CallbackSupport<any>();
    let myCallback = () => {};

    // Act
    callbackSupport.addCallback(myCallback);
    callbackSupport.removeCallback(myCallback);

    // Assert
    expect(callbackSupport.getCallbacks().length).to.eq(0);
  });

  it('should call added callback on handle', (done) => {
    // Arrange
    let callbackSupport = new CallbackSupport<any>();
    let myCallback = () => { done(); };

    // Act
    callbackSupport.addCallback(myCallback);
    callbackSupport.handle(0);
  });
});
