const db = require("../db");
const Products = require("./models/products");

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

function seed() {
  // create a bunch of dogs in the db
  let promises = puppies.map(puppy => {
    return Products.create(puppy);
  });
  return Promise.all(promises);
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
