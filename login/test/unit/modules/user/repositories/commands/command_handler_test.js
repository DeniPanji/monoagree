

const commandHandler = require('../../../../../../bin/modules/user/repositories/commands/command_handler');
const domain = require('../../../../../../bin/modules/user/repositories/commands/domain');
const validator = require('../../../../../../bin/modules/user/utils/validator');
const wrapper = require('../../../../../../bin/helpers/utils/wrapper');
const EventEmitter = require('events').EventEmitter;
const sinon = require('sinon');
const assert = require('assert');

describe('postDataRegister', () => {

  it('Should return registered user object', async () => {

    let queryResult = {
      err: null,
      data: {
        _id: "f003e020-12a2-4fc7-807f-d1e7862888fa",
        name: "test",
        email: "test@gmail.com",
        createdAt: "2022-12-07T10:51:19.917Z",
        updatedAt: ""
      },
      message: 'Your Request Has Been Processed',
      code: 200
    };
  
    let payload = {
      name:"test",
      email:"test@gmail.com",
      password: "1234",
      confirmPassword: "1234"
    };

    sinon.stub(domain.prototype, 'register').returns(queryResult);
    sinon.stub(validator, 'isValidParamPostDataRegister').returns(queryResult);

    const rs = await commandHandler.postDataRegister(payload);

    assert.equal(rs.err, null);
    assert.equal(rs.code, 200);
    assert.equal(rs.data.name, 'test');

    domain.prototype.register.restore();
    validator.isValidParamPostDataRegister.restore();

  });

  it('Should return error', async () => {

    let queryResult = {
      success: false,
      data: {
          message: {
              "test@test": [
                  "Test@test is not a valid email"
              ]
          }
      },
      "code": 400
  };
  
    let payload = {
      email:"test@test",
      password: "1234",
      confirmPassword: "1234"
  };

    sinon.stub(domain.prototype, 'register').returns(queryResult);
    sinon.stub(validator, 'isValidParamPostDataRegister').returns(queryResult);

    const rs = await commandHandler.postDataRegister(payload);

    assert.equal(rs.success, false);
    assert.equal(rs.code, 400);

    domain.prototype.register.restore();
    validator.isValidParamPostDataRegister.restore();

  });

});

describe('postDataLogin', () => {

  it('Should return login user object', async () => {

    let queryResult = {
      "success": true,
      "data": {
          "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZWE2ZDVhNC0wZTQ3LTQ3MzItODY1OC1iYjU3ZTI5NWQwZjQiLCJlbWFpbCI6InRlc3RAdGVzdC50ZXN0IiwibmFtZSI6IiIsImltYWdlVXJsIjoiIiwiaWF0IjoxNjcxNzYzMzE5fQ.mNCrD9nGGty9d3aMHpSvBq5Fu7w0oTSAeuGYoZ3mZOM"
      },
      "message": "Login success",
      "code": 200
    };
  
    let payload = {
      email:"test@test.test",
      password: "1234"
  };

    sinon.stub(domain.prototype, 'login').returns(queryResult);
    sinon.stub(validator, 'ifExistEmail').returns(queryResult);

    const rs = await commandHandler.postDataLogin(payload);

    assert.equal(rs.success, true);
    assert.equal(rs.code, 200);
    assert.equal(rs.message, 'Login success');

    domain.prototype.login.restore();
    validator.ifExistEmail.restore();

  });

  it('Should return error', async () => {

    let queryResult = {
      success: false,
      data: {
          message: {
              "test@test": [
                  "Test@test is not a valid email"
              ]
          }
      },
      "code": 400
  };
  
    let payload = {
      email:"test@test",
      password: "1234",
      confirmPassword: "1234"
  };

    sinon.stub(domain.prototype, 'register').returns(queryResult);
    sinon.stub(validator, 'isValidParamPostDataRegister').returns(queryResult);

    const rs = await commandHandler.postDataRegister(payload);

    assert.equal(rs.success, false);
    assert.equal(rs.code, 400);

    domain.prototype.register.restore();
    validator.isValidParamPostDataRegister.restore();

  });

});
