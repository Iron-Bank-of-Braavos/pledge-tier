const model = require('./models.js');
//fill db with documents

//create a random num gen for Pledge $
const createByFive = () => {
  let num = Math.floor(Math.random() * 1000);
  while (num % 5 !== 0) {
    num--;
  };
  return num;
};

const createBackers = () => {
  let backers = Math.floor(Math.random() * 300);
  return backers;
};


//hit random gen api to get reward(s)
//hit random date api to get ETA
//hit random city api to get Shipping Location

//make RNG func to create random # for backers