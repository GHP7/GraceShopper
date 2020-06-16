/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product Model', () => {
    let product;
    before(() => db.sync({ force: true }));
    beforeEach(() => {
      product = {
        name: 'R2-D2',
        price: 52,
        description: 'A totally A-OK robot',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61srwGulapL._AC_SX522_.jpg',
        stock: 1
      };
    });
    afterEach(() => db.sync({ force: true }));

    it('has fields name, price, description, imageUrl, stock', async () => {
      product.notARealAttribute = 'does not compute';
      const savedProduct = await Product.create(product);
      expect(savedProduct.name).to.equal('R2-D2');
      expect(savedProduct.imageUrl).to.equal('https://images-na.ssl-images-amazon.com/images/I/61srwGulapL._AC_SX522_.jpg');
      expect(savedProduct.description).to.equal('A totally A-OK robot');
      expect(savedProduct.price).to.equal(52);
      expect(savedProduct.stock).to.equal(1);
      expect(savedProduct.notARealAttribute).to.equal(undefined);
    });

    it('name cannot be null', async () => {
      const blankProduct = Product.build();
      try {
        await blankProduct.validate();
        throw Error('validation should have failed without name');
      } catch (err) {
        expect(err.message).to.contain('name cannot be null');
      }
    });
    it('name cannot be empty', async () => {
      const emptyNameProduct = Product.build({ name: '' });
      try {
        await emptyNameProduct.validate();
        throw Error('validation should have failed with empty name');
      } catch (err) {
        expect(err.message).to.contain('Validation notEmpty on name failed');
      }
    });

    it('price has to be a number', async () => {
      product.price = 'Tammy'
      try {
        const negativeProduct = await Product.create(product);
        if (negativeProduct) {
          throw Error('Validation should have failed with a string for a price');
        }
      } catch (err) {
        expect(err.message).to.not.have.string('Validation should have failed');
      }
      product.price = '12';
      try {
        const stringProductPrice = await Product.create(product);
        if (stringProductPrice) {
          throw Error('Validation should have failed with a number within a string');
        }
      } catch (err) {
        expect(err.message).to.not.have.string('Validation should have failed');
      }
    });
  });