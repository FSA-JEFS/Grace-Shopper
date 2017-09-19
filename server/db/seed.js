const db = require("../db");
const {
  User,
  Product,
  Review,
  Order
} = require("./models");

const users = [{
    name: 'Forrest Weiswolf',
    email: 'forrest@puppybook.com',
    password: 'forrest',
    tags: ['hasOwnedDog', 'City Apartment'],
    isAdmin: true,
    googleId: null
  }, {
    name: 'Elisabeth Seite',
    email: 'eli@puppybook.com',
    password: 'eli',
    tags: ['hasOwnedDog', 'City Apartment'],
    isAdmin: true,
    googleId: null
  }, {
    name: 'Jannine Chain',
    email: 'j9@puppybook.com',
    password: 'j9',
    tags: ['hasOwnedDog', 'City Apartment'],
    isAdmin: true,
    googleId: null
  }, {
    name: 'Swyx',
    email: 'swyx@puppybook.com',
    password: 'swyx',
    tags: ['hasOwnedDog', 'City Apartment'],
    isAdmin: false,
    googleId: null
  }, {
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    tags: ['hasOwnedDog', 'City Apartment'],
    isAdmin: true,
    googleId: null
  }, {
    name: 'User',
    email: 'user@user.com',
    password: 'user',
    tags: ['hasOwnedDog', 'City Apartment'],
    isAdmin: false,
    googleId: null
  }

]

const puppies = [
  {
    name: "Strawberry",
    breed: "Newfoundland",
    breeder: "Kodiak Acres",
    breederEmail: "contact@kodiakacres.com",
    description: "Whether it is in the show ring, competing in obedience, training for water rescue or working with draft carts and sleds, our Newfoundlands posses all the qualities attributed to this breed. Our Newfoundlands are raised in a loving family environment with acres of fenced in woodlands to play. Our Newfoundlands are a part of our family and as a family we participate in their obedience and conformation classes as well as many other events.",
    price: 500,
    photos: [
      "http://www.dogster.com/wp-content/uploads/2014/12/newfoundland-puppies-.jpg",
      "http://d30nr4b2k915ua.cloudfront.net/wp-content/uploads/2014/12/04222204/newfoundland-puppies-09.jpg",
      "http://d30nr4b2k915ua.cloudfront.net/wp-content/uploads/2014/12/04222204/newfoundland-puppies-03.jpg",
      "http://d30nr4b2k915ua.cloudfront.net/wp-content/uploads/2014/12/04222204/newfoundland-puppies-08.jpg"
    ],
    tags: ["large", "social", "show"],
    inventory: 5
  },
  {
    name: "Caramel",
    breed: "German Shepherd",
    breeder: "Totana Piper Hill",
    breederEmail: "contact@totana-at-piperhill.com",
    description: "We have puppies available occasionally throughout the year.  Our litters are bred for character, conformation, companionship and overall good health.  We use our own studs on some of our litters, and some are sired by an outside stud that has been carefully selected to insure our standards of quality are met. Most of all we are gratified by the number of families who over three generations have returned to us for their family companions.  We will be happy to share with you specific information with reference to litters expected and puppies currently available. Please e-mail us at totanapiperhill@aol.com and we will be happy to give you information on pedigrees and prices of the puppies and when they may be available. A 6 month old German/American cross female from a long-coated mother(Que Sera Sera) and a normal coated father (Wild Bill Hickok). Today, the effort continues undiminished with a sound breeding program drawing from the best of American and German lines assuring that our shepherd progeny will continue to fulfill the achievements of the past while maintaining the high standards of our breeding goals in promoting German Shepherds of good character and correct conformation for the home, show and working environments.",
    price: 500,
    photos: [
      "https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/27/48/fotolia_419277_XS.jpg",
      "https://i.ytimg.com/vi/oGoPUw0YBAg/maxresdefault.jpg",
      "https://lh3.googleusercontent.com/rn5iBh-ARszvIsb-QqkDJANrEPcVeGT7lYHIePP5ay1MwoueiK77goSO93S1pnr0ZA=h900",
      "http://totana-at-piperhill.com/wp-content/uploads/2015/11/Quante-Bully-pup-Boomer-Lujick-113x200.jpg"
    ],
    tags: ["large", "German", "show"],
    inventory: 5
  },
  {
    name: "Caramel",
    breed: "Samoyed",
    breeder: "White Magic",
    breederEmail: "contact@whitemagicsamoyeds.com",
    description: "Samoyeds can and do fit into every lifestyle you can imagine. They live in the suburban, big Cities like NY City in Manhattan where they live in apartments, the countryside, and even on boats!! What appears to be a large dog, is actually a medium size dog ranging from 36 to 55 lbs in the females and 50 to 75 lbs in the boys. They appear big due to their beautiful coats, big bone structure and long beautiful necks. If you live an active life, your Samoyed will live an active life, if you sled, they will sled, if you hike, they will hike, if you like to watch movies, they will watch movies, if you like to work and play on the computer, well, they will play with themselves! They are quite entertaining and love to love you. It's quite simple actually. The Samoyed was truly bred as a companion dog to love and care for you the best possible way they can, and they deserve all of that back from us in the best way that we can.",
    price: 500,
    photos: [
      "http://cdn.akc.org/Marketplace/Breeds/Samoyed_SERP.jpg",
      "https://i.pinimg.com/736x/b7/df/71/b7df718141757a559498cdf15cbfec60--samoyed-puppies-fluffy-puppies.jpg",
      "https://i.pinimg.com/736x/a4/7e/2c/a47e2c9cddf9a3018d487f2a5af9f1a3--samoyed-puppies-puppys.jpg",
      "https://i.ytimg.com/vi/QemVqIkl2wg/hqdefault.jpg"
    ],
    tags: ["white", "cute", "show"],
    inventory: 5
  },
  {
    name: "Fiddlesticks",
    breed: "Labrador Retriever",
    breeder: "Barefoot Labradors",
    breederEmail: "contact@barefootlabradors.com",
    description: "Our English style labs are AKC, OFA, OFEL, CERF registered. They enjoy 12 wooded acres surrounded by Connecticut State Park and Killingworth Land Trust, and swim in lab-friendly Pond Meadow Brook. We breed for sound health and good temperament. We raise our puppies in a home environment and socialize them through frequent handling and play. From their third to 16th day, we give them a series of gentle neurological stimulation (The Bio Sensor Program) to improve cardio vascular performance, tolerance to stress and resistance to disease. Also, during the 8-weeks they are with us, they listen to National Public Radio (NPR). We microchip all of our puppies to help in their return to you in the event they are lost or stolen.",
    price: 500,
    photos: [
      "http://cdn2-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-6.jpg",
      "https://i.ytimg.com/vi/e9IC8NVECTg/maxresdefault.jpg",
      "http://cdn.akc.org/Marketplace/Breeds/Labrador_Retriever_SERP.jpg",
      "http://belquest.com/images/available/banana-labrador-retriever-pups[1].jpg"
    ],
    tags: ["loyal", "happy", "adorable"],
    inventory: 5
  },
  {
    name: "Tatertots",
    breed: "Golden Retriever",
    breeder: "Crane Hollow Goldens",
    breederEmail: "contact@cranehollowgoldens.com",
    description: "All of our dogs come from excellent pedigrees with champion lines, sweet and gentle temperaments, and great looks.  Our dogs and puppies are surrounded by attention and love from day one, and we socialize our pups from birth to help ensure that you get the sweetest addition to your family. All of our breeding dogs have OFA hip, elbow, eye and heart clearances. Five of our breeding dogs are referred to as “English Cream Goldens”, while in the United States their beautiful coats are recognized as light goldens. In the United Kingdom and most countries around the world, they are recognized by this name because of their attractive coats and gentle temperament. Our dogs are all AKC credentialed, have been trained and have gentle and well mannered temperaments.  We use call names for our dogs and not their given names for the simple reason it makes them easier to train.  For more information on their given names, feel free to contact us. Because of our own personal preferences, we made the decision long ago to focus our breeding efforts on the Light Golden category of the breed.",
    price: 500,
    photos: [
      "https://i.pinimg.com/736x/e9/27/af/e927afe6f0879f13f84a94f617ec46c5--pet-pet-dog-cat.jpg",
      "https://a00000820018-live-cc36dd0ff06f46c08f9308e5144c2f82-209a3c0.s3.amazonaws.com/filer_public_thumbnails/filer_public/ae/bf/aebf8712-235c-4efe-a142-46e500470783/shutterstock_123176032_golden-retriever.jpg__1170x0_q90_subject_location-2144%2C1419_subsampling-2_upscale.jpg",
      "https://www.grca.org/wp-content/uploads/2015/08/puppyflower.jpg",
      "https://i.ytimg.com/vi/TyT4XIwT6lg/maxresdefault.jpg"
    ],
    tags: ["gentle", "sweet", "ladykiller"],
    inventory: 5
  },
  {
    name: "Milkshakes",
    breed: "Spaniel",
    breeder: "Jannine",
    breederEmail: "j@pew.com",
    description: "Some description here",
    price: 500,
    photos: [
      "http://www.warrenphotographic.co.uk/photography/bigs/37258-Cute-Daxiedoodle-and-Golden-Cocker-Spaniel-puppies-white-background.jpg",
      "http://cdn.akc.org/Marketplace/Breeds/Cavalier_King_Charles_Spaniel_SERP.jpg",
      "http://www.love-springer-spaniels.com/images/stubborn-english-springer-spaniel-puppy-21583518.jpg",
      "http://www.warrenphotographic.co.uk/photos/bigs/39807-Working-English-Springer-Spaniel-puppy-white-background.jpg"
    ],
    tags: ["social", "wet", "beach-friendly"],
    inventory: 5
  },
  {
    name: "Donut",
    breed: "Malamute",
    breeder: "Forrest",
    breederEmail: "f@pew.com",
    description: "Malamute description here",
    price: 700,
    photos: [
      "http://www.doglib.com/wp-content/uploads/al/alaskan-alaskan-malamute-informations-and-breed.jpg",
      "https://i.pinimg.com/736x/e6/1b/d0/e61bd05217e14511da13aecf74fa9af4--alaskan-malamute-puppies-malamute-puppy.jpg",
      "https://www.pets4homes.co.uk/images/classifieds/2015/03/12/908384/large/a7565b14a8c0b91d07b65c4ebd7f3256.png",
      "https://i.ytimg.com/vi/ySjoLvscpEI/hqdefault.jpg"
    ],
    tags: ["social", "fat", "lazy", "la", "tada"],
    inventory: 5
  },
  {
    name: "Cody",
    breed: "Pug",
    breeder: "Tom",
    breederEmail: "tom@pew.com",
    description: "Other descriptions of pugs here",
    price: 700,
    photos: [
      "http://smartfamilypets.com/wp-content/uploads/2015/12/Pug-puppies-620x330.jpg",
      "https://i.pinimg.com/originals/a9/fe/af/a9feafc5866670cbb476f10997572b17.jpg",
      "http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-puppies/pug-puppy-1.jpg",
      "https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg"
    ],
    tags: ["social", "cute"],
    inventory: 1
  },
  {
    name: "Porkchops",
    breed: "Corgi",
    breeder: "Cassio",
    breederEmail: "c@pew.com",
    description: "Cassio likes corgi's",
    price: 800,
    photos: [
      "http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/pembroke-welsh-corgi-hero.jpg",
      "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/09/Gibson.jpg",
      "https://i.imgur.com/ofhzov7.jpg",
      "https://i.pinimg.com/736x/0c/70/33/0c70336c57dcb1103bc849c1a0971010--baby-corgi-welsh-corgi-puppies.jpg"
    ],
    tags: ["social", "meatlover"],
    inventory: 2
  },
  {
    name: "Cookies And Cream",
    breed: "Chowchow",
    breeder: "Eli",
    breederEmail: "e@pew.com",
    description: "Chow chow likes BEARS!",
    price: 740,
    photos: [
      "https://i.pinimg.com/736x/11/12/09/1112097172845da1ab30cf3fc3eed160--white-chow-chow-chow-chow-puppies.jpg",
      "http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/Chow-Chow.jpg",
      "http://www.eclassifieds4u.com/images/2016/07/27//m_th_beagle-puppies-for-adoption-32.jpg",
      "http://www.dogster.com/wp-content/uploads/2015/05/chow-chow-puppies-04.jpg"
    ],
    tags: ["fluffy", "adventurous", "beach-friendly"],
    inventory: 1
  }
];

const reviews = [
  {reviewText: "Human-centered design thinker-maker-doer parallax driven parallax 360 campaign food-truck piverate pitch deck paradigm. Parallax integrate convergence thinker-maker-doer 360 campaign pitch deck co-working paradigm cortado. Entrepreneur sticky note SpaceTeam user story workflow integrate thinker-maker-doer Steve Jobs innovate. Thinker-maker-doer affordances unicorn actionable insight food-truck quantitative vs. qualitative big data waterfall is so 2000 and late responsive paradigm 360 campaign. Disrupt long shadow thought leader actionable insight iterate venture capital actionable insight viral big data personas."},
  {reviewText: "Personas unicorn unicorn minimum viable product responsive bootstrapping actionable insight minimum viable product engaging. Physical computing minimum viable product long shadow pair programming affordances convergence iterate earned media. Latte pivot personas driven engaging paradigm moleskine agile 360 campaign quantitative vs. qualitative intuitive disrupt. Convergence paradigm 360 campaign parallax pivot earned media entrepreneur integrate moleskine."},
  {reviewText: "Latte iterate pair programming user centered design minimum viable product paradigm workflow bootstrapping intuitive viral human-centered design. Workflow waterfall is so 2000 and late human-centered design thinker-maker-doer viral user story responsive. Physical computing unicorn venture capital hacker physical computing 360 campaign moleskine personas hacker human-centered design entrepreneur 360 campaign intuitive. Earned media disrupt fund ship it pivot unicorn innovate pivot integrate workflow innovate. Pitch deck engaging user centered design driven earned media co-working ideate piverate."},
  {reviewText: "Intuitive big data intuitive responsive experiential pair programming earned media parallax SpaceTeam disrupt. Venture capital co-working physical computing experiential innovate personas convergence moleskine pivot ideate entrepreneur quantitative vs. qualitative. Bootstrapping prototype agile food-truck quantitative vs. qualitative workflow responsive ship it. Paradigm entrepreneur convergence engaging co-working food-truck cortado workflow. Ideate paradigm Steve Jobs human-centered design SpaceTeam fund SpaceTeam integrate cortado grok bootstrapping waterfall is so 2000 and late venture capital."},
  {reviewText: "Fund venture capital waterfall is so 2000 and late innovate experiential hacker actionable insight innovate driven. Actionable insight pivot driven venture capital human-centered design user story convergence workflow actionable insight. Workflow fund affordances 360 campaign co-working actionable insight long shadow latte Steve Jobs venture capital. User centered design ship it entrepreneur viral engaging human-centered design prototype physical computing agile intuitive parallax."}
]

const orders = [
  {status: "CREATED", items: []},
  {status: "PROCESSING", items: []},
  {status: "CREATED", items: []},
  {status: "CANCELLED", items: []},
  {status: "COMPLETED", items: []}
]

function seed() {
  let createdUsers, createdProducts, createdReviews, createdOrders

    // create products
  return Promise.all(puppies.map(puppy => Product.create(puppy)))
  .then(result => {
    createdProducts = result
    // create users
    return Promise.all(users.map(user => User.create(user)))
  })
  .then(result => {
    createdUsers = result
    // create reviews
    for (var i = 0; i < reviews.length; i++){
      reviews[i].userId = createdUsers[i].id
      reviews[i].productsId = createdProducts[i].id
    }
    return Promise.all(reviews.map(review => Review.create(review)))
  }).then(result => {
    createdReviews = result
    // create orders
    for (var i = 0; i < orders.length; i++){
      orders[i].userId = createdUsers[i].id
      orders[i].items = [{product: createdProducts[i], price: createdProducts[i].price, quantity: i + 1}]

    }
    return Promise.all(orders.map(order => Order.create(order)))
  })
}

const main = () => {
  console.log("Syncing db...");
  db
    .sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
