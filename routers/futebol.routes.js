const express = require('express');
const router = express.Router();
const futebol = require('../controllers/futebol.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de ação funcionando!' });
});

router.get('/listall', futebol.listAll);

router.get('/listid/:id', futebol.listId);

router.post('/add', futebol.add);

router.put('/update/:id', futebol.update);

router.delete('/delete/:id', futebol.delete);

module.exports = router;
