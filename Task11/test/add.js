const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const getUsers = require('../data/getUsers');
const env = require('../endpoint/test');
const fs = require('fs');

describe('Get Users', () => {

    getUsers.map((data) => {
      let response;
      let id = parseInt(data.uri.split('/')[2]);
  
      before(async () => {
        data.uri = env.uri + data.uri;
        response = await sendRequest(data);
      });
  
      it('Status code should be 200', () => {
        expect(response.statusCode).to.eql(200);
      });
  
      it('Response should have "content-type"', () => {
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');
      });
  
      it('Verifying quantity of users in response', () => {
        expect(response.body.length).to.eql(10);
      });
    })
  });
  