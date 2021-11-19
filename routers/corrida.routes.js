const express = require('express');
const router = express.Router();
const corrida = require('../controllers/corrida.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de ação funcionando!' });
});

router.get('/listall', corrida.listAll);

router.get('/listname/:id', corrida.listId);

router.post('/add', corrida.add);

router.put('/update/:id', corrida.update);

router.delete('/delete/:id', corrida.delete);

module.exports = router;
