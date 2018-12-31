import { expect } from 'chai';
import 'mocha';

import { MsInterval } from '../timer/interval';
import calculateTransitionStep from './calculate_transition_step';

describe('calculateTransitionStep', () => {
  it('should calculate 0 for 0 ms and steepness 0.5', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 0, 0.5);

    // Assert
    expect(result).to.equal(0);
  });

  it('should calculate 1 for 0 ms and steepness 0', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 0, 0);

    // Assert
    expect(result).to.equal(1);
  });

  it('should calculate 0 for 0 ms and steepness 1', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 0, 1);

    // Assert
    expect(result).to.equal(0);
  });

  it('should calculate 0 for 100 ms and steepness 0.5', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 100, 0.5);

    // Assert
    expect(result).to.equal(0);
  });

  it('should calculate 1 for 100 ms and steepness 0', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 100, 0);

    // Assert
    expect(result).to.equal(1);
  });

  it('should calculate 0 for 100 ms and steepness 1', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 100, 1);

    // Assert
    expect(result).to.equal(0);
  });

  it('should calculate 1 for 50 ms and steepness 0.5', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 50, 0.5);

    // Assert
    expect(result).to.equal(1);
  });

  it('should calculate 0.5 for 50 ms and steepness 0', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 50, 0);

    // Assert
    expect(result).to.equal(0.5);
  });

  it('should calculate 0.5 for 50 ms and steepness 1', () => {

    // Act
    let result = calculateTransitionStep(new MsInterval(100), 50, 1);

    // Assert
    expect(result).to.equal(0.5);
  });
});
