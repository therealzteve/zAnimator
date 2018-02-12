import { create } from './main';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = create("some_fake_id");
    expect(result.version).to.equal('1.0.0');
  });

});
