const Post = require('../models/post');

function getAll(req, res, next) {
  Post.getAll()
    .then(data => {
      res.locals.post = data;
      next();
    }).catch(next);
}


function create(req, res, next) {
  Post.create(req.body)
  .then(data => {
    res.locals.post = data;
    console.log(res.locals.photos);
    next();
  }).catch(next);
}


module.exports = {
  getAll,
  create
}
