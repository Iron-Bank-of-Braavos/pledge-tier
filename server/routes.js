const router = require('express').Router();
const controller = require('./controllers.js');

router
  .route('/rewards')
  .get(controller.get)
  .post(controller.post);

module.exports = router;