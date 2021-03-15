const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

let url = 'mongodb+srv://MatyuninB:Qwe111111@cluster0.jxtet.mongodb.net/Costs?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true});

app.use(cors());
app.use(bodyParser.json());

const apiRoutes = require('./src/modules/routes/routes')

app.use('/', apiRoutes)

app.listen(8000, () => {
  console.log('listening 8000');
});