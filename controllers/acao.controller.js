const Jogo = require('../model/jogos');

exports.listAll = async (req, res) => {
  await Jogo.find({ tipo: 'ação' })
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
  const jogo = await Jogo.findOne({ _id: id, tipo: 'ação' });
  if (jogo.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(jogo);
  }
};

exports.add = async (req, res) => {
  const { nome, lancamento, desenvolvedora, tipo } = req.body;

  if (!nome || !lancamento || !desenvolvedora || !tipo) {
    res
      .status(400)
      .json({ messagem: 'Objeto inválido. Preencha todos os campos.' });
    return;
  } else if (tipo != 'ação') {
    res
      .status(400)
      .json({ message: 'Objeto inválido. O tipo do jogo deve ser ação' });
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

  const jogo = await Jogo.findById(id);

  if (!jogo) {
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

  const jogo = await Jogo.findById(id);

  if (!jogo) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  await Jogo.deleteOne({ _id: id }).then(() => {
    res.status(200).json({ message: 'Deletado com sucesso!' });
  });
};
