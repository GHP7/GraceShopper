/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const codysPrice = 'cody@puppybook.com'

    beforeEach(() => {
      return Product.create({
        price: codysPrice
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].price).to.be.equal(codysPrice)
    })
  }) // end describe('/api/products')
  describe('Express API', () => {
    const { findAll: productFindAll } = Product;
    beforeEach(() => {
      Product.findAll = sinon.spy(() => Promise.resolve(products));
    });
    afterEach(() => {
      Product.findAll = productFindAll;
    });

    it('GET /api/products responds with all products', async () => {
      const response = await agent.get('/api/products').expect(200);
      expect(response.body).to.deep.equal(products);
      expect(Product.findAll.calledOnce).to.be.equal(true);
    });
  });
}) // end describe('Product routes')
