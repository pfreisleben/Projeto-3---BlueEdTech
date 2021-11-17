const mongoose = require('mongoose');

const receitasModel = new mongoose.Schema({
  nome: { type: String, required: true },
  nroSeries: { type: Number, required: true },
  nroRepeticoes: { type: Number, required: true },
  qtdPeso: { type: Number, required: true },
});

const Exercicio = mongoose.model('exercicios', exerciciosModel);

module.exports = Exercicio;
