import { expect } from 'chai';
import { RectangleFormat } from './rectangle.format';
import 'mocha';

describe('shape format test suite', function(){

  it('should return width on getWidth', function(){
    let rectangleFormat = new RectangleFormat();
    rectangleFormat.width = 5;

    expect(rectangleFormat.getWidth()).to.equal(5);
  });

  it('should return double radius on getHeight', function(){
    let rectangleFormat = new RectangleFormat();
    rectangleFormat.height = 5;

    expect(rectangleFormat.getHeight()).to.equal(5);
  });
});
