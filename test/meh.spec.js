import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Meh from '../lib';

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });

  describe("Meh", function() {
    it("init", function() {
      var wrapper = shallow(<Meh />);
      expect(wrapper.text()).to.equal('meh');
    });
  });
});
