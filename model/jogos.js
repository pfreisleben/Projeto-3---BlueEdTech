const mongoose = require('mongoose');

const jogosModel = new mongoose.Schema({
  nome: { type: String, required: true },
  lancamento: { type: Date, required: true },
  desenvolvedora: { type: String, required: true },
  tipo: { type: String, required: true },
});

const Jogo = mongoose.model('jogos', jogosModel);

module.exports = Jogo;
