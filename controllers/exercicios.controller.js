const Receita = require('../model/receitas');

exports.listAll = async (req, res) => {
  await Cidade.find({})
    .then((cidades) => {
      console.log(cidades);
      res.status(200).json(cidades);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.listId = async (req, res) => {
  const name = req.params.name;
  const cidade = await Cidade.find({ nome: name });
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
    await Cidade.create(req.body)
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

  const cidade = await Cidade.findById(id);

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

  await Cidade.findOneAndUpdate({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Atualizado com sucesso!' });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const cidade = await Cidade.findById(id);

  if (!cidade) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  await Cidade.deleteOne({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Deletado com sucesso!' });
  });
};
