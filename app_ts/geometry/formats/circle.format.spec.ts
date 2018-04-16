import { expect } from 'chai';
import { CircleFormat } from './circle.format';
import 'mocha';

describe('circle format test suite', function(){

  it('should return double radius on getWidth', function(){
    let circleFormat = new CircleFormat();
    circleFormat.radius = 5;

    expect(circleFormat.getWidth()).to.equal(10);
  });

  it('should return double radius on getHeight', function(){
    let circleFormat = new CircleFormat();
    circleFormat.radius = 5;

    expect(circleFormat.getHeight()).to.equal(10);
  });
});
