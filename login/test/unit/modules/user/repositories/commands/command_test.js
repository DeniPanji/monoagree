

const db = require('../../../../../../bin/helpers/databases/mongodb/db');
const command = require('../../../../../../bin/modules/user/repositories/commands/command');
const wrapper = require('../../../../../../bin/helpers/utils/wrapper');
const sinon = require('sinon');
const assert = require('assert');

describe('insertOneUser', () => {

  it('Should return user object', async () => {

    let queryResult = {
      err: null,
      data: {
        email: "test@gmail.com",
        createdAt: "2022-12-07T10:51:19.917Z",
        updatedAt: ""
      },
      message: 'Your Request Has Been Processed',
      code: 200
    };
  
    let payload = {
      email:"test@gmail.com",
      password: "1234",
      confirmPassword: "1234"
    };

    sinon.stub(db.prototype, 'insertOne').returns(queryResult);

    const rs = await command.insertOneUser(payload);

    assert.equal(rs.err, null);
    assert.equal(rs.code, 200);

    db.prototype.insertOne.restore();

  });

  it('Should return error', async () => {

    let queryResult = {
      err: null,
      data: {
        name: "",
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

    sinon.stub(db.prototype, 'insertOne').returns(queryResult);

    const rs = await command.insertOneUser(payload);

    assert.equal(rs.err, null);
    assert.equal(rs.code, 200);

    db.prototype.insertOne.restore();

  });

});

describe('insertOneMockupView', () => {

  // let queryResult = {
  //   err: null,
  //   data: {
  //     projectName: 'Test',
  //     domainName: 'Test',
  //     apiName: 'Test',
  //     mockup: 'test',
  //     _id: '5ac326f42ab53718edf9ea1c'
  //   },
  //   message: 'Your Request Has Been Processed',
  //   code: 200
  // };

  // let payload = {
  //   projectName: 'Test',
  //   domainName: 'Test',
  //   apiName: 'Test',
  //   mockup: 'test'
  // };

  // it('Should return view mockup object', async () => {

  //   sinon.stub(db.prototype, 'insertOne').returns(queryResult);

  //   const rs = await command.insertOneMockupView(payload);

  //   assert.equal(rs.err, null);
  //   assert.equal(rs.code, 200);
  //   assert.equal(rs.data.domainName, 'Test');

  //   db.prototype.insertOne.restore();

  // });

});
