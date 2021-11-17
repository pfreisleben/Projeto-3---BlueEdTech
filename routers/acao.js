const express = require('express');
const router = express.Router();
const exercicio = require('../controllers/exercicios.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de exercicios funcionando!' });
});

router.get('/listall', exercicio.listAll);

router.get('/listname/:id', exercicio.listId);

router.post('/add', exercicio.add);

router.put('/update/:id', exercicio.update);

router.delete('/delete/:id', exercicio.delete);

module.exports = router;
