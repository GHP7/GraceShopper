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
            imageURL: 'https://pbs.twimg.com/media/ERPUXFDVUAEt2-O.jpg'
        })

        const sherb = await Product.create({
            name: 'Sherb',
            price: 1000000,
            description: 'Sherb the sensitive goat will have you in your feels on your island. Buy his amiibo here!',
            itemsInStock: 3,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d6/Sherb.png/revision/latest?cb=20200406180522'
        })

        const zucker = await Product.create({
            name: 'Zucker',
            price: 1000000,
            description: "Zucker's design is based off of the Japanese food, takoyaki. Just don't try to eat him. Buy his amiibo here!",
            itemsInStock: 3,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8e/NH-icon-Zucker-00.png/revision/latest/scale-to-width-down/598?cb=20200224185341'
        })

        const judy = await Product.create({
            name: 'Judy',
            price: 1000000,
            description: "Judy may seem cute on the surface, but she always knows all the drama on the island. Buy her amiibo here!",
            itemsInStock: 3,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d4/Judy_NH.png/revision/latest?cb=20200318005830'
        })

        const audie = await Product.create({
            name: 'Audie',
            price: 1000000,
            description: "Audie has the fashion sense to bring some much needed good taste to your island. Buy her amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/60/2BD6CEE3-62E2-473A-8AA7-AAEF2DD4083C.png/revision/latest/scale-to-width-down/700?cb=20200616050444'
        })

        const marina = await Product.create({
            name: 'Marina',
            price: 1000000,
            description: "She's really, really cute. That's it, that's the description.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/96/NH-icon-Marina-00.png/revision/latest/scale-to-width-down/600?cb=20200224185328'
        })

        const ankha = await Product.create({
            name: 'Ankha',
            price: 1000000,
            description: "Bring some royalty to your island with the Ankha amiibo. Get her here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/7e/Ankha_NLa.png/revision/latest?cb=20200413172251'
        })

        const coco = await Product.create({
            name: 'Coco',
            price: 1000000,
            description: "Coco, a demonic bunny from a cursed alternate reality, bakes a mean apple tart. Buy her amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/83/Coco_NH.png/revision/latest?cb=20200321103716'
        })

        const beau = await Product.create({
            name: 'Beau',
            price: 1000000,
            description: "Beau is just about the chillest deer you'll ever meet. Get his amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d4/Beau_NH.png/revision/latest?cb=20200501231808'
        })

        const merengue = await Product.create({
            name: 'Merengue',
            price: 1000000,
            description: "Her nose is a strawberry. She's a rhino and her nose is a STRAWBERRY! Just buy her already!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/Merengue_NH.png/revision/latest?cb=20200321211014'
        })

        const stitches = await Product.create({
            name: 'Stitches',
            price: 1000000,
            description: "He's a living teddy bear, which yes is a little horrifying but also ridiculously cute? Dare to buy his amiibo here.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/Stitches_NH.png/revision/latest?cb=20200413171903'
        })

        const fauna = await Product.create({
            name: 'Fauna',
            price: 1000000,
            description: "Never call Fauna basic. She HATES it when you call her basic. Get her not-basic amiibo here.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/72/Fauna.png/revision/latest?cb=20161008150856'
        })

        const whitney = await Product.create({
            name: 'Whitney',
            price: 1000000,
            description: "This fly fox wears the finest fits, for real! Buy Whitney's amiibo here!",
            itemsInStock: 1,
            imageURL: "https://vignette.wikia.nocookie.net/animalcrossing/images/0/06/NH-icon-Whitney_00.png/revision/latest/scale-to-width-down/496?cb=20200224182330"
        })

        const bob = await Product.create({
            name: 'Bob',
            price: 9999999,
            description: "It's Bob.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/be/175px-Bob_NLa.png/revision/latest?cb=20200413200623'
        })

        const dom = await Product.create({
            name: 'Dom',
            price: 1000000,
            description: "Dom is that weird jock friend who's kind of a hippy and burns a lot of sage but you know, he's pretty cool. Buy his amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e8/Dom_Poster_NH.png/revision/latest?cb=20200319192018'
        })

        const phil = await Product.create({
            name: 'Phil',
            price: 1000000,
            description: "It's Phil.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b3/Amiibo_057_Phil.png/revision/latest/scale-to-width-down/340?cb=20150912185401'
        })

        const tangy = await Product.create({
            name: 'Tangy',
            price: 1000000,
            description: "Her head is made out of an orange, and her personality is perfectly sweet. Get her amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://66.media.tumblr.com/f1f32137ad78b13b0d752a5c38554c6c/0b790c561008eb7d-d4/s250x400/4d751f7b2e3777d2072be0f2493c140a12e7dd32.png'
        })

        const lucky = await Product.create({
            name: 'Lucky',
            price: 1000000,
            description: "No one knows what happened to Lucky for him to end up as a mummy, but it did make him sooo cute!",
            itemsInStock: 1,
            imageURL: 'https://66.media.tumblr.com/6dd50bef5e09663db3634b0ede0cf5da/7a4ff777a8a26fb3-2d/s500x750/406d907fc704cd1247459c058c8ee3b0cdf515e6.jpg'
        })

        const shari = await Product.create({
            name: 'Shari',
            price: 1000000,
            description: "This cheeky monkey will have you feeling better in no time.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e7/Shari_HD.png/revision/latest?cb=20180518164657'
        })

        const ruby = await Product.create({
            name: 'Ruby',
            price: 1000000,
            description: "Ruby's ruby eyes will definitely have you feeling a type of way.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b2/Amiibo_170_Ruby.png/revision/latest/scale-to-width-down/340?cb=20160116213746'
        })

        const chrissy = await Product.create({
            name: 'Chrissy',
            price: 1000000,
            description: "Chrissy's infectious pep could bring a much needed lightness to your island! Get her amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/Chrissy_NH_pic.png/revision/latest?cb=20200321123018'
        })

        const diana = await Product.create({
            name: 'Diana',
            price: 1000000,
            description: "We know Diana may seem snooty, but we promise it's just a complex. Get her amiibo here!",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/84/31a901eed448f9ee30fc1af858e29be5_clipped_rev_2.png/revision/latest?cb=20161008150800'
        })

        const ketchup = await Product.create({
            name: 'Ketchup',
            price: 100000,
            description: "Ketchup will always bring the sauce to your island with her peppy charm. Buy her amiibo here.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a3/Ketchup_HD.png/revision/latest?cb=20180404120537'
        })

        const cherry = await Product.create({
            name: 'Cherry',
            price: 1000000,
            description: "Cherry is the goth queen you need on your island! Buy her amiibo here.",
            itemsInStock: 1,
            imageURL: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/3e/Cherry_NH.png/revision/latest?cb=20200524035737'

        })

            // In-game items
        const kerokero = await Product.create({
            name: 'Kerokerokeropppi Poster',
            price: 100000,
            description: "Get the hit poster from Sanrio's best character, Keroppi!",
            itemsInStock: 2,
            imageURL: 'https://cdn.nookazon.com/posters/PosterNpcNmlRbt20.png'
        })

        const realBasicPainting = await Product.create({
            name: 'Real Basic Painting',
            price: 1500000,
            description: 'The real painting of "The Blue Boy" by Thomas Gainsborough. Sold at Jolly Redd"s Treasure Trawler',
            itemsInStock: 1,
            imageURL: 'https://images-na.ssl-images-amazon.com/images/I/71ODy-Yqx%2BL._AC_SY741_.jpg'
        })

        const lilyValley = await Product.create({
            name: 'Lily of the Valley',
            price: 187500,
            description: 'Lilies of the Valley are extremely rare flowers that only spawn when your island is in perfect condition.',
            itemsInStock: 10,
            imageURL: 'https://i.redd.it/szuy0215xos41.jpg'
        })

        const bambooWand = await Product.create({
            name: 'Bamboo Wand',
            price: 99000,
            description: "This bamboo wand can help you change into customizable outfits with the click of a button.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/tools/ToolStickBamboo.png'
        })

        const melodyPoster = await Product.create({
            name: 'My Melody Poster',
            price: 100000,
            description: "Spruce up your home's walls with this exclusive 'My Melody Poster'!",
            itemsInStock: 2,
            imageURL: 'https://cdn.nookazon.com/posters/PosterNpcNmlDer10.png'
        })

        const realAcademicPainting = await Product.create({
            name: 'Real Academic Painting',
            price: 711111,
            description: 'The real version of "Vetruvian Man" by Leonardo Da Vinci. Sold at Jolly Redd"s Treasure Trawler.',
            itemsInStock: 1,
            imageURL: 'https://images.wsj.net/im-117619?width=620&size=0.6666666666666666'
        })

        const tRexSkull = await Product.create({
            name: 'T. Rex Skull',
            price: 66666,
            description: 'One piece out of three needed to complete the T. Rex exhibit for your island museum.',
            itemsInStock: 15,
            imageURL: 'https://i.ytimg.com/vi/kgdrxRbjlKE/maxresdefault.jpg'
        })

        const liberty = await Product.create({
            name: 'Statue of Liberty',
            price: 2250000,
            description: 'The Statue of Liberty can only be obtained from Gulliver the Sailing Seagull.',
            itemsInStock: 1,
            imageURL: 'https://preview.redd.it/47winr6c6kx41.jpg?width=960&crop=smart&auto=webp&s=6a294475d9d4e51a07f5bba1fdca2a76c71135a3'
        })

        const grandPiano = await Product.create({
            name: 'Grand Piano',
            price: 320000,
            description: "Obtained from 'Nook's Cranny.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrPianoGrand_Remake_0_0.png'
        })

        const crescentMoonChair = await Product.create({
            name: 'Crescent-moon Chair',
            price: 1080000,
            description: "This rare item can only be crafted from the fragments of shooting stars.",
            itemsInStock: 3,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrStarMoonChairL_Remake_0_0.png'
        })

        const lighthouse = await Product.create({
            name: 'Lighthouse',
            price: 40000,
            description: "Keep an eye on the high seas for pirates and sea monsters.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrLighthouse_Remake_0_0.png'
        })

        const twinklingPainting = await Product.create({
            name: 'Real Twinkling Painting',
            price: 900000,
            description: "'The Starry Night', painted in June 1889, is an oil on canvas painting by Dutch post-Impressionist painter Vincent van Gogh.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtStarryNight.png'
        })

        const desktopComp = await Product.create({
            name: 'Desktop Computer',
            price: 260000,
            description: "A simple desktop computer for all your needs. Comes in different colors.",
            itemsInStock: 25,
            imageURL: 'https://cdn.nookazon.com/miscellaneous/FtrDesktopPC_Remake_3_0.png'
        })

        const ancientStatue = await Product.create({
            name: 'Real Ancient Statue',
            price: 1000000,
            description: "'Dogu' are small humanoid and animal figurines made during the later part of the Jōmon period (14,000–400 BC) of prehistoric Japan.",
            itemsInStock: 6,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrSculptureDoguu.png'
        })

        const underwater = await Product.create({
            name: 'Underwater Home Flooring',
            price: 250000,
            description: "Make your home an underwater paradise with this underwater flooring.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/floors/RoomSpFloorFishTank00.png'
        })

        const pondStone = await Product.create({
            name: 'Cherry-blossom Pond Stone',
            price: 520000,
            description: "For the center of your zen garden.",
            itemsInStock: 3,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrStonewaterbowlSakura.png'
        })

        const calmPainting = await Product.create({
            name: 'Real Calm Painting',
            price: 1500000,
            description: "'A Sunday Afternoon on the Island of La Grande Jatte', painted from 1884-1886, is George Seurat's most famous painting.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtSundayOn.png'
        })

        const starryGarland = await Product.create({
            name: 'Starry Garland',
            price: 1250000,
            description: "Hang these stars to bring the night sky home.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/wall-mounted/FtrStarDecorationWall_Remake_0_0.png'
        })

        const stereo = await Product.create({
            name: 'High-end Stereo',
            price: 99000,
            description: "It goes up to 11.",
            itemsInStock: 4,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrComponentPro.png'
        })

        const sushiChefOutfit = await Product.create({
            name: "Sushi Chef's Outfit",
            price: 57777,
            description: "Wear this and you'll swear you could practically speak to the fish.",
            itemsInStock: 6,
            imageURL: 'https://cdn.nookazon.com/tops/TopsTexTopCoatHItamae1.png'
        })

        const shellArch = await Product.create({
            name: 'Shell Arch',
            price: 115555,
            description: "Little Mermaid vibes.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrShellArch_Remake_0_0.png'
        })

        const grandAtlasMothModel = await Product.create({
            name: 'Grand-atlas Moth Model',
            price: 1500000,
            description: "This rare item can only be acquired from Flick the Bug-Collecting Lizard.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrInsectYonagunisanToy.png'
        })

        const hockeyMask = await Product.create({
            name: 'Hockey Mask',
            price: 60000,
            description: "*cue Michael Myers theme music*",
            itemsInStock: 8,
            imageURL: 'https://acnhcdn.com/latest/ClosetIcon/AccessoryGlassmouthHockeyWhite.png'
        })

        const imperialBed = await Product.create({
            name: 'Imperial Bed',
            price: 105882,
            description: "Bring it back to the good old days with this imperial bed.",
            itemsInStock: 3,
            imageUrl: 'https://cdn.nookazon.com/housewares/FtrOrientalBedW_Remake_0_0.png'
        })

        const frozenTree = await Product.create({
            name: 'Frozen Bed',
            price: 1250000,
            description: "There's cold but then there's, like, really cold.",
            itemsInStock: 7,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrIceTree_Remake_0_0.png'
        })

        const commonPainting = await Product.create({
            name: 'Real Common Painting',
            price: 600000,
            description: "'The Gleaners' depicts three peasant women gleaning a field of stray stalks of wheat after the harvest. Painted by Jean-Jean-François Millet completed in 1857.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtGleaners.png'
        })
        
        const pagoda = await Product.create({
            name: 'Pagoda',
            price: 3250000,
            description: "This zen-style pagoda could bring peace and balance to your island home.",
            itemsInStock: 2,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrGojyu_Remake_0_0.png'
        })

        const pool = await Product.create({
            name: 'Pool',
            price: 40000,
            description: "No running around the pool!",
            itemsInStock: 3,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrPool_Remake_0_0.png'
        })

        const perfectPainting = await Product.create({
            name: 'Real Perfect Painting',
            price: 650000,
            description: "'Apples and Oranges' is a post-Impressionist painting, made in 1900, that is part of a still life series by the French painter Paul Cézanne.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtAppleOrange.png'
        })

        const cuteBed = await Product.create({
            name: 'Cute Bed',
            price: 100000,
            description: "For the princess in your life.",
            itemsInStock: 2,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrCuteBedW_Remake_0_0.png'
        })

        const kimonoStand = await Product.create({
            name: 'Elaborate Kimono Stand',
            price: 300000,
            description: "Hang your kimonos here to impress your guests.",
            itemsInStock: 10,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrKimonostandRich_Remake_0_0.png'
        })

        const jollyPainting = await Product.create({
            name: 'Real Jolly Painting',
            price: 600000,
            description: "'Summer' is a Manneristic painting, made in 1563, by the Italian painter Giuseppe Arcimboldo.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtSummer.png'
        })

        const amazingPainting = await Product.create({
            name: 'Real Amazing Painting',
            price: 1500000,
            description: "'The Night Watch', painted in 1642 by Rembrandt, is one of the most famous Dutch Golden Age paintings.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtNightWatch.png'
        })

        const motherlyStatue = await Product.create({
            name: 'Real Motherly Statue',
            price: 2844444,
            description: "'The Capitoline Wolf' is a bronze sculpture depicting a scene from the legend of the founding of Rome. Artist unknown.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrSculptureCapitolini.png'
        })

        const goldHelmet = await Product.create({
            name: 'Gold Helmet',
            price: 158823,
            description: "For a more bougie medieval theme on your island.",
            itemsInStock: 3,
            imageURL: 'https://cdn.nookazon.com/headwear/CapFullfaceKnightGold.png'
        })

        const valiantStatue = await Product.create({
            name: 'Real Valiant Statue',
            price: 3555555,
            description: "The 'Winged Victory of Samothrace' is a marble Hellenistic sculpture of Nike created in about the 2nd century BC.",
            itemsInStock: 1,
            imageURL: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/18150.png'
        })

        const beautifulStatue = await Product.create({
            name: 'Real Beautiful Statue',
            price: 1666666,
            description: "The 'Venus de Milo' is an ancient Greek statue and one of the most famous works of Ancient Greek sculpture",
            itemsInStock: 1,
            imageURL: 'https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/a10_r.png'
        })

        const goldNugget = await Product.create({
            name: 'Gold Nugget',
            price: 52141,
            description: "I can't believe it's real gold!",
            itemsInStock: 100,
            imageURL: 'https://acnhcdn.com/latest/MenuIcon/Gold_Ore.png'
        })

        const moon = await Product.create({
            name: 'Moon',
            price: 1250000,
            description: "I don't know what to tell you, it's the literal moon!",
            itemsInStock: 1,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrMoon.png'
        })

        const luckyCat = await Product.create({
            name: 'Lucky Cat',
            price: 400000,
            description: "If you've been feeling an evil spirit looming over your home, get this lucky cat to bring you good will.",
            itemsInStock: 20,
            imageURL: 'https://cdn.nookazon.com/miscellaneous/FtrManekineko_Remake_0_0.png'
        })

        const nmt = await Product.create({
            name: 'Nook Miles Ticket',
            price: 50000,
            description: "Get an island getaway from your island getaway with this Nook Miles Ticket!",
            itemsInStock: 999,
            imageURL: 'https://acnhcdn.com/latest/MenuIcon/PlaneTicket.png'
        })

        const novaLight = await Product.create({
            name: 'Nova Light',
            price: 720000,
            description: "It's weird looking, it glows in the dark, it was made out of the metal of falling stars - what more could you want?",
            itemsInStock: 7,
            imageURL: 'https://cdn.nookazon.com/miscellaneous/FtrStarLamp_Remake_0_0.png'
        })
        
        const bonsai = await Product.create({
            name: 'Pine Bonsai Tree',
            price: 700000,
            description: "The perfect addition to your zen-style home.",
            itemsInStock: 12,
            imageURL: 'https://cdn.nookazon.com/miscellaneous/FtrBonsaiPine.png'
        })

        const persianRug = await Product.create({
            name: 'Blue Persian Rug',
            price: 100000,
            description: "Obtained from Saharah the traveling rug sales-camel.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/rugs/RugSquarePersianL01.png'
        })

        const stoneLion = await Product.create({
            name: 'Stone Lion-dog',
            price: 200000,
            description: "Chinese guardian lions are a traditional Chinese architectural ornament.",
            itemsInStock: 15,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrSekishishi_Remake_0_0.png'
        })

        const harp = await Product.create({
            name: 'Harp',
            price: 200000,
            description: "Bless your home with soothing music with this beautiful harp.",
            itemsInStock: 10,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrHarp_Remake_0_0.png'
        })

        const mamaPanda = await Product.create({
            name: 'Mama Panda Doll',
            price: 66666,
            description: "It's a giant panda doll!",
            itemsInStock: 25,
            imageURL: 'https://cdn.nookazon.com/housewares/FtrPandaM.png'
        })

        const whiteChocolateFloor = await Product.create({
            name: 'White-chocolate Flooring',
            price: 99000,
            description: "Chocolate flooring for the Willy Wonka weebs out there.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/floors/RoomTexFloorChocolate01.png'
        })

        const cherryBlossomFloor = await Product.create({
            name: 'Cherry-blossom Flooring',
            price: 333333,
            description: "When the cherry blossoms aren't in bloom, this flooring will remind you of its beauty.",
            itemsInStock: 5,
            imageURL: 'https://cdn.nookazon.com/floors/RoomTexFloorSakura00.png'
        })

        const famousPainting = await Product.create({
            name: 'Real Famous Painting',
            price: 750000,
            description: "The 'Mona Lisa' is a portrait created in 1503 by the famous Italian artist Leonardo da Vinci.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtMonaLisa.png'
        })

        const movingPainting = await Product.create({
            name: 'Real Moving Painting',
            price: 1300000,
            description: "The 'Birth of Venus' is a painting by the Italian artist, Sandro Botticelli, probably made in the mid 1480s.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrArtBirthVenus.png'
        })

        const underwaterWall = await Product.create({
            name: 'Underwater Wallpaper',
            price: 286000,
            description: "Under the sea, under the sea, down where it's better! -Sebastian.",
            itemsInStock: 4,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/RoomSpWallFishTank00.png'
        })

        const greatStatue = await Product.create({
            name: 'Real Great Statue',
            price: 4500000,
            description: "'Kamehameha I' is a bronze sculpture depicting the founder and first ruler of the Kingdom of Hawaii. This priceless statue was made by the American artist Thomas Ridgeway Gould.",
            itemsInStock: 1,
            imageURL: 'https://acnhcdn.com/latest/FtrIcon/FtrSculptureKamehameha.png'
        })

        const summerCrown = await Product.create({
            name: 'Summer Soltice Crown',
            price: 1500000,
            description: "Wear this if you ever want to get rid of your boyfriend while he's wearing a bear suit.",
            itemsInStock: 50,
            imageURL: 'https://acnhcdn.com/latest/ClosetIcon/CapHatSummer0.png'
        })

            // Gaming consoles
        const ps5 = await Product.create({
            name: 'Playstation 5',
            price: 499,
            description: 'Pre-order the Playstation 5 console, soon to be released by Sony.',
            itemsInStock: 0,
            imageURL: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200616204538/CyTFLAVx9Vw8yhnqPEsNGP-768-80.png'
        })

        const ninSwitch = await Product.create({
            name: 'Nintendo Switch',
            price: 299,
            description: 'Get the gaming system by Nintendo that lets you play the games you want, wherever you are, whenever you like.',
            itemsInStock: 25,
            imageURL: 'https://www.nintendo.com/content/dam/noa/en_US/images/switch/system/three-modes-in-one.png'
        })

        const mechKeyboard = await Product.create({
            name: 'Mechanical Gaming Keyboard',
            price: 199,
            description: 'A necessity for serious gamers - this mechanical keyboard comes with durable optical switches and multi-function digital dials for optimal play.',
            itemsInStock: 50,
            imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81yOuAUQAiL._AC_SL1500_.jpg'
        })

            // boop merchandise
        const giftCard = await Product.create({
            name: 'Boop Gaming Gift Card',
            price: 25,
            description: 'Give the gift of gaming to your friend or loved one with the new Boop Gaming Card. Pay as much as you like.',
            itemsInStock: 100,
            imageURL: 'https://images.ctfassets.net/gfuhmd86yefb/7BmQdJ7SRRWFOUevSKmJeB/bb5f8e06e492ccbed3a044aa2d73fe09/giftcard.png'
        })

        const tShirt = await Product.create({
            name: 'Boop T-Shirt',
            price: 19,
            description: 'Honestly it"s just a plain white t-shirt. We just thought it looked nice.',
            itemsInStock: 200,
            imageURL: 'https://media.gq.com/photos/5e839e84d73e2d00084f1a4f/master/w_2000,h_1333,c_limit/Uniqlo-U-crew-neck-short-sleeve-T-shirt.jpg'
        })

        const subscription = await Product.create({
            name: 'Boop Gaming Subscription',
            price: 10,
            description: 'Subscribe to Boop Gaming for first-in-line access to new and unreleased content, exclusive deals, and more.',
            itemsInStock: 999,
            imageURL: 'https://wedevs.com/img/dokan/extensions/dokan-subscriptions/Subscriptions.jpg'
        })

        const consoleRepair = await Product.create({
            name: 'Console Repair Service',
            price: 149,
            description: "Switch broken? Rage smashed your PS4? Beans in your computer? We'll fix that right up for you.",
            itemsInStock: 999,
            imageURL: 'https://image.freepik.com/free-photo/repairman-overall-helmet-showing-thumb-up_23-2148073212.jpg'
        })

    // Dummy product data
    // for (let i = 0; i < 50; i++) {
    //   let product = await Product.create({
    //     // name: randomProductName,
    //     name: faker.random.words(),
    //     price: faker.random.number(),
    //     description: faker.random.words(),
    //     itemsInStock: faker.random.number(),
    //     imageURL: faker.image.imageUrl()
    //   })

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
