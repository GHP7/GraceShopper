'use strict'
var faker = require('faker')
const db = require('../server/db')
const {User, Product, Order, Cart} = require('../server/db/models')

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

    // Order data
    // for (let i = 0; i < 30; i++) {
    //   await Order.create({
    //     status: 'COMPLETED',
    //     items: [],
    //     subTotal: 0,
    //     userId: Math.ceil(Math.random() * 20)
    //   })
    // }

    // ************************************* //

    // Product section
    // Random product variables
    // let randomProductName = faker.random.word()
    // let randomPrice = faker.random.number()
    // let randomDescription = faker.random.words()
    // let randomStock = faker.random.number()
    // let randomImage = faker.image.imageUrl()


      // Animal Crossing Seed Data
            const raymond = await Product.create({
            name: 'Raymond',
            price: 3000000,
            description: 'Buy the Raymond villager amiibo to bring his professional cool to your island.',
            itemsInStock: 1,
            imageURL: 'https://ih1.redbubble.net/image.1162648413.7265/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
        })

        const marshal = await Product.create({
            name: 'Marshal',
            price: 2000000,
            description: 'Buy the Marshal villager amiibo to bring the pep to your preppy themed island.',
            itemsInStock: 2
        })

        const roald = await Product.create({
            name: 'Roald',
            price: 1500000,
            description: 'Roald the penguin is the buff heartthrob your tropical island needs. Buy his amiibo here!',
            itemsInStock: 3,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7e/ROALD_New_Horizons.png/revision/latest?cb=20200224042135'
        })

            // In-game items
        const realBasicPainting = await Product.create({
            name: 'Real Basic Painting',
            price: 1500000,
            description: 'The real painting of "The Blue Boy" by Thomas Gainsborough. Sold at Jolly Redd"s Treasure Trawler',
            itemsInStock: 1
        })

        const lilyValley = await Product.create({
            name: 'Lily of the Valley',
            price: 187500,
            description: 'Lilies of the Valley are extremely rare flowers that only spawn when your island is in perfect condition.',
            itemsInStock: 10
        })

        const realAcademicPainting = await Product.create({
            name: 'Real Academic Painting',
            price: 711111,
            description: 'The real version of "Vetruvian Man" by Leonardo Da Vinci. Sold at Jolly Redd"s Treasure Trawler.',
            itemsInStock: 1
        })

        const tRexSkull = await Product.create({
            name: 'T. Rex Skull',
            price: 66666,
            description: 'One piece out of three needed to complete the T. Rex exhibit for your island museum.',
            itemsInStock: 15
        })

        const liberty = await Product.create({
            name: 'Statue of Liberty',
            price: 2250000,
            description: 'The Statue of Liberty can only be obtained from Gulliver the Sailing Seagull.',
            itemsInStock: 1
        })

            // Gaming consoles
        const ps5 = await Product.create({
            name: 'Playstation 5',
            price: 499,
            description: 'Pre-order the Playstation 5 console, soon to be released by Sony.',
            itemsInStock: 0
        })

        const ninSwitch = await Product.create({
            name: 'Nintendo Switch',
            price: 299,
            description: 'Get the gaming system by Nintendo that lets you play the games you want, wherever you are, whenever you like.',
            itemsInStock: 25
        })

        const mechKeyboard = await Product.create({
            name: 'Mechanical Gaming Keyboard',
            price: 199,
            description: 'A necessity for serious gamers - this mechanical keyboard comes with durable optical switches and multi-function digital dials for optimal play.',
            itemsInStock: 50
        })

            // boop merchandise
        const giftCard = await Product.create({
            name: 'Boop Gaming Gift Card',
            price: 0,
            description: 'Give the gift of gaming to your friend or loved one with the new Boop Gaming Card. Pay as much as you like.',
            itemsInStock: 100
        })

        const tShirt = await Product.create({
            name: 'Boop T-Shirt',
            price: 19,
            description: 'Honestly it"s just a plain white t-shirt. We just thought it looked nice.',
            itemsInStock: 200
        })

        const subscription = await Product.create({
            name: 'Boop Gaming Subscription',
            price: 10,
            description: 'Subscribe to Boop Gaming for first-in-line access to new and unreleased content, exclusive deals, and more.',
            itemsInStock: 999
        })

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

      // use nested for loop to add multiple products for each user
      // Associations between products and order
      // for (let i = 1; i <= 30; i++) {
      //   for (let j = 0; j < 1; j++) {
      //     let randomProduct1 = Math.ceil(Math.random() * 50)
      //     let randomProduct2 = Math.ceil(Math.random() * 50)
      //     let randomProduct3 = Math.ceil(Math.random() * 50)
      //     await Order.create({
      //       status: 'COMPLETED',
      //       items: [randomProduct1, randomProduct2, randomProduct3],
      //       subTotal: 0,
      //       userId: i
      //     })
      //   }
      // }

      // CART THROUGH TABLE DATA + ASSOCIATIONS
      for (let i = 1; i <= 30; i++) {
        for (let j = 0; j < 1; j++) {
          let randomProduct = Math.ceil(Math.random() * 50)
          await Cart.create({
            subtotal: 0,
            quantity: Math.ceil(Math.random() * 9),
            userId: i,
            productId: randomProduct
          })
        }
      }
      // for (let i = 0; i < 30; i++) {
      //   await Cart.create({
      //     status: 'ACTIVE',
      //     items:
      //     subtotal:
      //     productId:
      //     userId:
      //   })
      // }

      // for (let i = 0; i < 1; i++) {
      //   await Order.create({
      //     status: 'COMPLETED',
      //     items: [product],
      //     subTotal: product.price,
      //     userId: Math.ceil(Math.random() * 20)
      //   })
      // }
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
