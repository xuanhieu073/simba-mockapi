const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json('welcome');
});

app.use('/leadership', require('./routes/leadership'));
app.use('/blog', require('./routes/blog'));
app.use('/form', require('./routes/form'));
app.use('/search', require('./routes/search'))
app.use('/faq', require('./routes/faq'))
app.use('/lightbox', require('./routes/lightbox'))

var staticDir = express.static(path.resolve(__dirname, 'public'));
app.use(staticDir);

const PORT = process.env.PORT || 4999;
app.listen(PORT, () => {
  console.log(`api is runing at port: ${PORT}`);
});
