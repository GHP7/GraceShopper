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
            imageURL: 'data:image/jpeg;base64,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'
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
