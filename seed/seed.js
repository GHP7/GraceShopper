// Destructure variables here for the relevant models from the server
const { db, User, Product } = require('../server/db')

// Faker library
var faker = require('faker')

// const seed = async () => {
//   try {
//     await db.sync({ force: true }); 
//     // User section
//     // Random user variables
//     let randomName = faker.name.findName()
//     let randomEmail = faker.internet.email()
//     let randomPassword = faker.internet.alphaNumeric()

//     // Dummy user data
//     for (let i = 0; i < 1000; i++) {
//       User.create({
//         name: randomName,
//         email: randomEmail,
//         password: randomPassword
//       })
//     }

//     // ************************************* //

//     // Product section
//     // Random product variables
//     let randomProductName = faker.random.word()
//     let randomPrice = faker.random.number()
//     let randomDescription = faker.random.words()
//     let randomStock = faker.random.number()
//     let randomImage = faker.random.image()

//     // Dummy product data
//     for (let i = 0; i < 5000; i++) {
//       Product.create({
//         name: randomProductName,
//         price: randomPrice,
//         description: randomDescription,
//         itemsInStock: randomStock,
//         imageURL: randomImage
//       })
//     }
//   } catch (err) {
//     next(err)
//   }
// }



// Hard coded seed data in event faker doesn't work
// const seed = async () => {
//     try {
           await db.sync({ force: true });
//         // Individual product data listed below
//             // Villager amiibo cards
//         const raymond = await Product.create({
//             name: 'Raymond',
//             price: 3000000,
//             description: 'Buy the Raymond villager amiibo to bring his professional cool to your island.',
//             itemsInStock: 1
//         })

//         const marshal = await Product.create({
//             name: 'Marshal',
//             price: 2000000,
//             description: 'Buy the Marshal villager amiibo to bring the pep to your preppy themed island.',
//             itemsInStock: 2
//         })

//         const roald = await Product.create({
//             name: 'Roald',
//             price: 1500000,
//             description: 'Roald the penguin is the buff heartthrob your tropical island needs. Buy his amiibo here!',
//             itemsInStock: 3
//         })

//             // In-game items
//         const realBasicPainting = await Product.create({
//             name: 'Real Basic Painting',
//             price: 1500000,
//             description: 'The real painting of "The Blue Boy" by Thomas Gainsborough. Sold at Jolly Redd"s Treasure Trawler',
//             itemsInStock: 1
//         })

//         const lilyValley = await Product.create({
//             name: 'Lily of the Valley',
//             price: 187500,
//             description: 'Lilies of the Valley are extremely rare flowers that only spawn when your island is in perfect condition.',
//             itemsInStock: 10
//         })

//         const realAcademicPainting = await Product.create({
//             name: 'Real Academic Painting',
//             price: 711111,
//             description: 'The real version of "Vetruvian Man" by Leonardo Da Vinci. Sold at Jolly Redd"s Treasure Trawler.',
//             itemsInStock: 1
//         })

//         const tRexSkull = await Product.create({
//             name: 'T. Rex Skull',
//             price: 66666,
//             description: 'One piece out of three needed to complete the T. Rex exhibit for your island museum.',
//             itemsInStock: 15
//         })

//         const liberty = await Product.create({
//             name: 'Statue of Liberty',
//             price: 2250000,
//             description: 'The Statue of Liberty can only be obtained from Gulliver the Sailing Seagull.',
//             itemsInStock: 1
//         })

//             // Gaming consoles
//         const ps5 = await Product.create({
//             name: 'Playstation 5',
//             price: 499,
//             description: 'Pre-order the Playstation 5 console, soon to be released by Sony.',
//             itemsInStock: 0
//         })

//         const ninSwitch = await Product.create({
//             name: 'Nintendo Switch',
//             price: 299,
//             description: 'Get the gaming system by Nintendo that lets you play the games you want, wherever you are, whenever you like.',
//             itemsInStock: 25
//         })

//         const mechKeyboard = await Product.create({
//             name: 'Mechanical Gaming Keyboard',
//             price: 199,
//             description: 'A necessity for serious gamers - this mechanical keyboard comes with durable optical switches and multi-function digital dials for optimal play.',
//             itemsInStock: 50
//         })

//             // boop merchandise
//         const giftCard = await Product.create({
//             name: 'Boop Gaming Gift Card',
//             price: 0,
//             description: 'Give the gift of gaming to your friend or loved one with the new Boop Gaming Card. Pay as much as you like.',
//             itemsInStock: 100
//         })

//         const tShirt = await Product.create({
//             name: 'Boop T-Shirt',
//             price: 19,
//             description: 'Honestly it"s just a plain white t-shirt. We just thought it looked nice.',
//             itemsInStock: 200
//         })

//         const subscription = await Product.create({
//             name: 'Boop Gaming Subscription',
//             price: 10,
//             description: 'Subscribe to Boop Gaming for first-in-line access to new and unreleased content, exclusive deals, and more.',
//             itemsInStock: 999
//         })
//     } catch (err) {
//         next(err)
//     }
// }

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}