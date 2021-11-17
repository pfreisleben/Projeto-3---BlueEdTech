const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

const Conn = require('./model/conn/index');

Conn();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Api Funcionando!' });
});

const cidadesRouter = require('./routers/exercicio.routes');
app.use('/exercicio', exercicioRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
