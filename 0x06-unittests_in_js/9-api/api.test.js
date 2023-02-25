const request = require('request');
const { expect } = require('chai');


describe('Index page', () => {

    it('GET returns correct res', (done) =>{
      request.get('http://localhost:7865/', (err, res, data) => {
        expect(res.statusCode).to.be.equal(200);
        expect(data).to.be.equal('Welcome to the payment system');
        done();
      });
    });

    it('GET/cart/12 returns correct response number id', (done) =>{
      request.get('http://localhost:7865/cart/12', (err, res, data) => {
        expect(res.statusCode).to.be.equal(200);
        expect(data).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('GET/cart/hello returns correct response string id', (done) =>{
      request.get('http://localhost:7865/cart/hello', (err, res, data) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
    
});
