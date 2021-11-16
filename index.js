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

const cidadesRouter = require('./routers/cidades.routes');
app.use('/cidades', cidadesRouter);

const estadosRouter = require('./routers/estados.routes');
app.use('/estados', estadosRouter);

const paisesRouter = require('./routers/paises.routes');
app.use('/paises', paisesRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
