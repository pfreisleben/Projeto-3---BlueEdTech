const mongoose = require('mongoose');
require('dotenv').config();

const Conn = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_BASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log('MongoDB esta conectado');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Conn;
