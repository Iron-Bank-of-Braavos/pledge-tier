const { Pledge } = require('./models.js');
const faker = require('faker');
//fill db with documents

//create a random num gen for Pledge $
// let  city = faker.date.future().toString();

// console.log(city);

const createByFive = () => {
  let num = Math.floor(Math.random() * 300);
  if (num === 0) {
    num = Math.floor(Math.random() * 300);
  } else {
    while (num % 25 !== 0) {
      num--;
      if (num === 0) {
        num = Math.floor(Math.random() * 300);
      }
    };
  }
  return num;
};

//make RNG func to create random # for backers
const createBackers = () => {
  let backers = Math.floor(Math.random() * 300);
  return backers;
};

const createData = () => {
  for (let i = 0; i < 20; i++) {
    //hit random gen api to get reward(s)
    let rewards = faker.lorem.words();
    //hit random date api to get ETA
    let  eta = `${faker.date.month()} ${faker.date.future().toString().slice(11, 15)}`;
    //hit random city api to get Shipping Location
    let city = faker.address.city();
    let backers = createBackers();
    let pledge = createByFive();

    //creates new document
    new Pledge({
      pledge_ammount: pledge,
      reward: rewards,
      eta: eta,
      shipping_location: city,
      backers: backers
    })
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

createData();