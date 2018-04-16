import { expect } from 'chai';
import { SquareFormat } from './square.format';
import 'mocha';

describe('square format test suite', function(){

  it('should return sideLength on getWidth', function(){
    let squareFormat = new SquareFormat();
    squareFormat.sideLength = 5;

    expect(squareFormat.getWidth()).to.equal(5);
  });

  it('should return sideLength on getHeight', function(){
    let squareFormat = new SquareFormat();
    squareFormat.sideLength = 5;

    expect(squareFormat.getHeight()).to.equal(5);
  });
});
