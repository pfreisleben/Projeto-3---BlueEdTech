const Jogo = require('../model/jogos');

exports.listAll = async (req, res) => {
  await Jogo.find({ tipo: 'estrategia' })
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
  const cidade = await Jogo.find({ _id: id });
  if (cidade.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(cidade);
  }
};

exports.add = async (req, res) => {
  const { nome, qtdBairros, populacao, dtAniversario } = req.body;

  if (!nome || !qtdBairros || !populacao || !dtAniversario) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
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
  const { nome, qtdBairros, populacao, dtAniversario } = req.body;

  const cidade = await Jogo.findById(id);

  if (!cidade) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  if (!nome || !qtdBairros || !populacao || !dtAniversario) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  }

  await Jogo.findOneAndUpdate({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Atualizado com sucesso!' });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const cidade = await Jogo.findById(id);

  if (!cidade) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  await Jogo.deleteOne({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Deletado com sucesso!' });
  });
};
