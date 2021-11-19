const express = require('express');
const router = express.Router();
const estrategia = require('../controllers/estrategia.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de ação funcionando!' });
});

router.get('/listall', estrategia.listAll);

router.get('/listid/:id', estrategia.listId);

router.post('/add', estrategia.add);

router.put('/update/:id', estrategia.update);

router.delete('/delete/:id', estrategia.delete);

module.exports = router;
