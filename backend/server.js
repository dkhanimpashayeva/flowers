const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const userScheme = new Schema(
{
url: {
type: String,
required: true,
},
name: {
type: String,
required: true,
},
price: {
type: Number,
},
},
{ timestamps: true }
);

const Flowers = mongoose.model('flowers', userScheme);

//! Get all users
app.get('/flowers', (req, res) => {
Flowers.find({}, (err, docs) => {
if (!err) {
res.send(docs);
} else {
res.status(500).json({ message: err });
}
});
});

//! Get user by id
app.get('/flowers/:id', (req, res) => {
const { id } = req.params;

Flowers.findById(id, (err, docs) => {
if (!err) {
if (docs) {
res.send(docs);
res.status(200);
} else {
res.status(404).json({ message: 'NOT FOUND' });
}
} else {
res.status(500).json({ message: err });
}
});
});

//! Add new user
app.post('/flowers', (req, res) => {
let user = new Flowers({
url: req.body.url,
name: req.body.name,
price: req.body.price,
});

user.save();
res.send({ message: 'SUCCESS' });
});

//! Delete user by id
app.delete('/flowers/:id', (req, res) => {
const { id } = req.params;
Flowers.findByIdAndDelete(id, (err) => {
if (!err) {
res.send('SUCCESSFULLY DELETED');
} else {
res.status(500).json({ message: err });
}
});
});

//! Update user by id
app.put('/flowers/:id', (req, res) => {
const { id } = req.params;

Users.findByIdAndUpdate(id, req.body, (err, doc) => {
if (!err) {
res.status(201);
} else {
res.status(500).json(err);
}
});
res.send({ message: 'SUCCESSFULLY Updated' });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB, (err) => {
if (!err) {
console.log('DB CONNECTED');
app.listen(PORT, () => {
console.log(`App is up and running on port: ${PORT}`);
});
}
});




