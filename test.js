const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String
})

const Photo = mongoose.model('Photo', PhotoSchema);

//create photo
/*Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem'
}); */

//read a photo
/*Photo.find({}, (err, data) => {
  console.log(data);
}) */

//update photo
/* const id = '60ff1c06c41c666713d0989b';
Photo.findByIdAndUpdate(
  id, {
    title: "Photo caner",
    description: "Description caner"
  },
  {
    new: true
  },
  (err, data) => {
    console.log(data);
  }
) */

//delete photo
const id = '60ff1cd1a658d168ca0ba11f';

Photo.findByIdAndDelete(id, (err,data) => {
  console.log('Photo is removed...');
})