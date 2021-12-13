const Mongoose = require('mongoose');

Mongoose.Promise = require('bluebird');

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/electron-phonebook';

const connectToDb = async () => {
  try {
    await Mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
};

module.exports = connectToDb;
