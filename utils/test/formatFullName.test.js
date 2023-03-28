const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () {})).to.equal('Error');
    });

    it('should return correct data format from "fullName" arg', () => {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('joHn dOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
    });

    it('should return an error if "fullName" is !== 2 sections', () => {
        expect(formatFullname('John Doe Smith')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
      });
});