const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config();

const Conn = require('./model/conn/index');
Conn();

app.use(cors());
app.options("", cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Api Funcionando!' });
});

const acaoRouter = require('./routers/acao.routes');
app.use('/acao', acaoRouter);

const corridaRouter = require('./routers/corrida.routes');
app.use('/corrida', corridaRouter);

const estrategiaRouter = require('./routers/estrategia.routes');
app.use('/estrategia', estrategiaRouter);

const futebolRouter = require('./routers/futebol.routes');
app.use('/futebol', futebolRouter);

const terrorRouter = require('./routers/terror.routes');
app.use('/terror', terrorRouter); 

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
