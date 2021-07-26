const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res)=> {
  //res.sendFile(path.resolve(__dirname, 'views/index.html'))
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

const port = 8000;

app.listen(port, ()=> {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
})