const db = require('../db');
const Products = require('./models/products');

const puppies = [
{ 
  name: "Milkshakes",
  breed: "spaniel",
  breeder: "Jannine",
  breederEmail: "j@pew.com",
  description: "eiugrh fIOWAHGUIRW ofejhguieroils",
  price: 500,
  photos: [
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"
  ],
  tags: ["social", "wet", "beach-friendly"],
  inventory: 5
},
{ 
  name: "Donut",
  breed: "Pug",
  breeder: "Forrest",
  breederEmail: "f@pew.com",
  description: "eiugrh fIOWAHGUIRW ofejhguieroils",
  price: 700,
  photos: [
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"
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
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"
  ],
  tags: ["social", "cute"],
  inventory: 1
},
{ 
  name: "Porkchops",
  breed: "brazilianish",
  breeder: "Cassio",
  breederEmail: "c@pew.com",
  description: "eiugrh fIOWAHGUIRW ofejhguieroils",
  price: 800,
  photos: [
    "http://cdn1-www.dogtime.com/assets/uploads/gallery/english-spaniel-dog-breed-pictures/8-fullbody.jpg"
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
      "https://i.pinimg.com/736x/11/12/09/1112097172845da1ab30cf3fc3eed160--white-chow-chow-chow-chow-puppies.jpg"
    ],
    tags: ["fluffy", "adventurous", "beach-friendly"],
    inventory: 1
  }
]

function seed () {
  // create a bunch of dogs in the db
  let promises = puppies.map(puppy => {
    return Products.create(puppy)
  })
  return Promise.all(promises)
}

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
