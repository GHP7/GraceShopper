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