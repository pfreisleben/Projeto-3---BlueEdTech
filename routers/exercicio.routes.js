const express = require('express');
const router = express.Router();
const exemplo = require('../model/exemplo');
const exemplo = require('../controllers/exemplo.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de cidades funcionando!' });
});

router.get('/listall', exemplo.listAll);

router.get('/listname/:name', exemplo.listName);

router.post('/add', exemplo.add);

router.put('/update/:id', exemplo.update);

router.delete('/delete/:id', exemplo.delete);

module.exports = router;
