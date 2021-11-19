const express = require('express');
const router = express.Router();
const acao = require('../controllers/acao.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de ação funcionando!' });
});

router.get('/listall', acao.listAll);

router.get('/listid/:id', acao.listId);

router.post('/add', acao.add);

router.put('/update/:id', acao.update);

router.delete('/delete/:id', acao.delete);

module.exports = router;
