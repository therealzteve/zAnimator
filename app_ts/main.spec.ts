import { create } from './main';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should initialize correctly', () => {
    const result = create("some_fake_id");
    expect(result.version).to.equal('0.0.1');
    expect(result.mainContainer).to.be.an('object');
  });

});
