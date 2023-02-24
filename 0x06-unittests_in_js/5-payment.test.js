const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi function', () => {
  let bigBrother;

  beforeEach(function () {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });
  
  afterEach(function () {
    bigBrother.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logging The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logging The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

});
