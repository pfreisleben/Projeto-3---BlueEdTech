const Jogo = require('../model/jogos');

exports.listAll = async (req, res) => {
  await Jogo.find({ tipo: 'terror' })
    .then((jogos) => {
      console.log(jogos);
      res.status(200).json(jogos);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.listId = async (req, res) => {
  const id = req.params.id;
  const terror = await Jogo.findOne({ _id: id, tipo: 'terror' });
  if (terror.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(terror);
  }
};

exports.add = async (req, res) => {
  const { nome, lancamento, desenvolvedora, tipo } = req.body;

  if (!nome || !lancamento || !desenvolvedora || !tipo) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Preencha todos os campos.' });
    return;
  } else if (tipo != 'terror') {
    res
      .status(400)
      .send({ message: 'Objeto inválido. O tipo do jogo deve ser terror' });
    return;
  } else {
    await Jogo.create(req.body)
      .then(() => {
        res.status(200).json({ message: 'Cadastrado com sucesso' });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { nome, lancamento, desenvolvedora, tipo } = req.body;

  const terror = await Jogo.findById(id);

  if (!terror) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  if (!nome || !lancamento || !desenvolvedora || !tipo) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Preencha todos os campos.' });
    return;
  }

  await Jogo.findOneAndUpdate({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Atualizado com sucesso!' });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const terror = await Jogo.findById(id);

  if (!terror) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  await Jogo.deleteOne({ _id: id }).then(() => {
    res.status(200).json({ message: 'Deletado com sucesso!' });
  });
};
