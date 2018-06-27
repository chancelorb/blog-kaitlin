const postRouter = require('express').Router();
const postController = require('../controlers/postController');
const respController = require('../controlers/respController');


postRouter.route('/')
  .get(
    postController.getAll,
    respController.sendOkResp,
    respController.sendErrResp);


module.exports = photoRouter;
