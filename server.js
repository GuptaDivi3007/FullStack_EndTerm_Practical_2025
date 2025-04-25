
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/bookapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/books', require('./routes/books'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
