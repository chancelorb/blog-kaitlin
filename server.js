require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const authController = require('./controllers/authController');

// const Router = require('./routes')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(authController.receiveToken);

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.use('/', (req, res) => {
  res.send('Hello Kaitlin');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
