function sendOkResp(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.posts || res.locals.post
  })
}

function sendErrResp(err, req, res, next) {
  res.json({
    status: 'err',
    msg: err.message
  })
}

module.exports = {
  sendOkResp,
  sendErrResp
}
