const { expect } = require('chai');
const { db } = require('../../server/db');
const seed = require('../../seed');
const { User, Product } = require('../../server/db');

describe('Tier One: Product >-< User Association', () => {
  before(() => db.sync({ force: true }));
  afterEach(() => db.sync({ force: true }));

  describe('Sequelize Models', () => {
    it('a product may belong to many users', async () => {
      const r2d2 = await User.create({ name: 'R2-D2' });
      const wallE = await User.create({ name: 'WALL-E' });
      const productLove = await Product.create({ name: 'Discover love' });
      await productLove.addUsers([r2d2, wallE]);
      const lovingUsers = await productLove
        .getUsers()
        .map((user) => user.name);
      expect(lovingUsers).to.deep.equal(['R2-D2', 'WALL-E']);
    });

    it('a user may belong to many products', async () => {
      const openPodBayDoors = await Product.create({
        name: 'Open the pod bay doors',
      });
      const makePizza = await Product.create({ name: 'Make pizza' });
      const hal9000 = await User.create({ name: 'HAL-9000' });
      await hal9000.addProducts([openPodBayDoors, makePizza]);
      const hal9000sProducts = await hal9000
        .getProducts()
        .map((name) => name.name);
      expect(hal9000sProducts).to.deep.equal([
        'Open the pod bay doors',
        'Make pizza',
      ]);
    });
  });

  describe('Seed File', () => {
    let users, products;
    beforeEach(async () => {
      await seed();
      users = await User.findAll({ include: [Product] });
      products = await Product.findAll({ include: [User] });
    });

    it('creates at least one user that has no products', () => {
      const usersWithNoProducts = users
        .filter((user) => !user.products.length)
        .map((user) => user.name);
      expect(usersWithNoProducts).to.have.lengthOf.above(0);
    });

    it('creates at least one product that has no users', () => {
      const productsWithNoUsers = products
        .filter((product) => !product.users.length)
        .map((product) => product.name);
      expect(productsWithNoUsers).to.have.lengthOf.above(0);
    });
  });
});
