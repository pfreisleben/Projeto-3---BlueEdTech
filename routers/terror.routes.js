const express = require('express');
const router = express.Router();
const terror = require('../controllers/terror.controller');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de ação funcionando!' });
});

router.get('/listall', terror.listAll);

router.get('/listid/:id', terror.listId);

router.post('/add', terror.add);

router.put('/update/:id', terror.update);

router.delete('/delete/:id', terror.delete);

module.exports = router;
