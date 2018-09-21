const { Pledge } = require('./models.js');
const faker = require('faker');
const fs = require('fs');
//fill db with documents

//create a random num gen for Pledge $
// let  city = faker.date.future().toString();

// console.log(city);

const createByFive = () => {
  let num = Math.floor(Math.random() * 35);
  if (num === 0) {
    num = Math.floor(Math.random() * 35);
  } else {
    while (num % 15 !== 0) {
      num--;
      if (num === 0) {
        num = Math.floor(Math.random() * 35);
      }
    };
  }
  return num;
};

const createProjectId = () => {
  let id = [];
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 101);
    if (id.includes(num)) {
      num = Math.floor(Math.random() * 101);
    } else {
      id.push(num);
    }
  }
  return id;
}
//make RNG func to create random # for backers
const createBackers = () => {
  let backers = Math.floor(Math.random() * 299);
  return backers;
};

const createData = () => {
  for (let i = 0; i < 100; i++) {
    //hit random gen api to get reward(s)
    let rewards = faker.lorem.words();
    //hit random date api to get ETA
    let  eta = `${faker.date.month()} ${faker.date.future().toString().slice(11, 15)}`;
    //hit random city api to get Shipping Location
    let city = faker.address.city();
    let backers = createBackers();
    let pledge = createByFive();
    let projectId = createProjectId();
    //creates new document
    new Pledge({
      pledge_ammount: pledge,
      reward: rewards,
      eta: eta,
      shipping_location: city,
      backers: backers,
      projectId: projectId
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