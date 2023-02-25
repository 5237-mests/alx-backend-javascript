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

});
