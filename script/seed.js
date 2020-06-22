'use strict'
var faker = require('faker')
const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')

async function seed() {
  // await db.sync({force: true})
  console.log('db synced!')
  try {
    await db.sync({force: true})
    // User section
    // Random user variables
    // let randomName = faker.name.findName()
    let randomPassword = faker.internet.password()

    // Dummy user data
    for (let i = 0; i < 20; i++) {
      await User.create({
        // name: randomName,
        email: faker.internet.email(),
        password: faker.internet.password()
      })
    }

    // ************************************* //

    // Product section
    // Random product variables
    // let randomProductName = faker.random.word()
    // let randomPrice = faker.random.number()
    // let randomDescription = faker.random.words()
    // let randomStock = faker.random.number()
    // let randomImage = faker.image.imageUrl()

    // Dummy product data
    for (let i = 0; i < 50; i++) {
      let product = await Product.create({
        // name: randomProductName,
        name: faker.random.words(),
        price: faker.random.number(),
        description: faker.random.words(),
        itemsInStock: faker.random.number(),
        imageURL: faker.image.imageUrl()
      })

      for (let i = 0; i < 1; i++) {
        await Order.create({
          status: 'COMPLETED',
          items: [product],
          subTotal: product.price
        })
      }
    }

  } catch (err) {
    console.log(err)
  }
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
