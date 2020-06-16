/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')
  describe('Express API', () => {
    const { findAll: userFindAll } = User;
    beforeEach(() => {
      User.findAll = sinon.spy(() => Promise.resolve(users));
    });
    afterEach(() => {
      User.findAll = userFindAll;
    });
    it('GET /api/users responds with all users', async () => {
      const response = await agent.get('/api/users').expect(200);
      expect(response.body).to.deep.equal(users);
      expect(User.findAll.calledOnce).to.be.equal(true);
    });
  });
}) // end describe('User routes')
