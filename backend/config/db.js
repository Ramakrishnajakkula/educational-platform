// config/db.js
const mongoose = require('mongoose');

const db = 'mongodb+srv://.ifqbcou.mongodb.net/temp?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
