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
    name: "Milkshakes",
    breed: "Spaniel",
    breeder: "Jannine",
    breederEmail: "j@pew.com",
    description: "eiugrh fIOWAHGUIRW ofejhguieroils",
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
    description: "eiugrh fIOWAHGUIRW ofejhguieroils",
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
    description: "eiugrh fIOWAHGUIRW ofejhguieroils",
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
    description: "eiugrh fIOWAHGUIRW ofejhguieroils",
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
    name: "CookiesAndCream",
    breed: "Chowchow",
    breeder: "Eli",
    breederEmail: "e@pew.com",
    description: "BEARS!",
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
