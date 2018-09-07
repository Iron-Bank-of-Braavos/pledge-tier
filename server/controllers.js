const { Pledge } = require('../database/models.js');
const _ = require('underscore');

const limitPledges = () => {
  let num = Math.floor(Math.random() * 16);
  return num;
}


module.exports = {
  get: (req, res) => {
    let num = limitPledges();
    Pledge.aggregate([
      {
        $sample: {size: num}
      }
    ])
    .sort({pledge_ammount: 1})
    .exec()
    .then((pledges) => {
      res.status(200).send(pledges)
    })
    .catch((err) => {
      console.log(err);
    });
    //make query to db to fetch data
    //limit response with 10 - 15 pledges of different values
    //try to make each pledge ammount unique
    //sort by decending order
  },
  post: (req, res) => {
    console.log('in the post...');
  }
}
// Pledge.find({})
    // .limit(1)
    // // .sort({pledge_ammount: 1})
    // .exec()
    // .then((pledges) => {
    //   let result = _.uniq(pledges, (pledge) => {
    //     return pledge.pledge_ammount;
    //   });
    //   res.status(200).send(result);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });