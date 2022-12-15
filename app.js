const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json('welcome')
})

app.use('/leadership', require('./routes/leadership'));
app.use('/blog', require('./routes/blog'));

var staticDir = express.static(
  path.resolve(__dirname, 'public')
);
app.use(staticDir);

const PORT = process.env.PORT || 4999;
app.listen(PORT, () => {
  console.log(`api is runing at port: ${PORT}`);
})