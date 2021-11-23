# API - Projeto 3 do Módulo 3 BlueEdTech

Essa é uma API criada utilizando as aulas do Módulo 3 de Back End em NodeJS da BlueEdTech.

A idéia é criar um CRUD para várias collections diferentes no MongoDB.

Linguagem Utilizada: _JavaScript_
Banco de dados: _MongoDB Atlas_
Tema: _Jogos_

## Collections utilizadas

      acao
      corrida
      estrategia
      futebol
      terror

## Iniciando o aplicativo

    npm start

## URL Base

    https://projeto03-blue.herokuapp.com/

## Listando os objetos (GET)

        /acao/listall
        /corrida/listall
        /estrategia/listall
        /futebol/listall
        /terror/listall

## Os retornos da aplicação estão no formato JSON, exemplo:

     {"\_id": "619cd3ec2a47dc002371ceda", "nome": "Counter Strike", "lancamento": "1996-01-09T00:00:00.000Z", "desenvolvedora": "Valve Ltda.", "tipo": "ação", "\_\_v": 0 }

### Retorno de /acao/listall

## Listando objeto específico (GET)

### Deverá ser passado um parametro(nome) na rota _/{collection}/listname/{nome}_, exemplo:

        /cidades/listname/Tatui
        /estados/listname/São Paulo
        /paises/listanme/Brasil

## Adicionando novos objetos (POST)

### Para adicionar um novo objeto a alguma collection, deverá ser enviado um JSON com os campos e dados corretos, caso contrário a aplicação retornará uma mensagem de erro.

#### Para adicionar um novo objeto na collection _CIDADES_:

      Rota: /cidades/add
      Fomato JSON esperado: { "nome": String, "qtdBairros": Number, "populacao": Number, "dtAniversario": Date }

#### Para adicionar um novo objeto na collection _ESTADOS_:

      Rota: /estados/add
      Fomato JSON esperado: { "nome": String, "regiao": String, "populacao": Number, "vlrSalarioMin": Number }

#### Para adicionar um novo objeto na collection _PAISES_:

      Rota: /estados/add
      Fomato JSON esperado: { "nome": String, "populacao": Number, "linguaMae": String, "pib": Number }

### Caso exista algum problema com os dados do JSON enviado, a aplicação retornará:

      {"messagem": "Objeto inválido. Algum campo está com valor vazio."}

### Caso o objeto seja adicionado com sucesso, a API retornará o seguinte JSON:

      { "message": "Cadastrado com sucesso" }

## Atualizando um objeto (PUT)

### Para atualizar um objeto de alguma collection, deverá ser informado o ID do objeto na rota, e enviado um JSON com os novos valores através do método PUT.

#### Para atualizar um novo objeto na collection _CIDADES_:

      Rota: /cidades/update/{id}
      Fomato JSON esperado: { "nome": String, "qtdBairros": Number, "populacao": Number, "dtAniversario": Date }

#### Para adicionar um novo objeto na collection _ESTADOS_:

      Rota: /estados/update/{id}
      Fomato JSON esperado: { "nome": String, "regiao": String, "populacao": Number, "vlrSalarioMin": Number }

#### Para adicionar um novo objeto na collection _PAISES_:

      Rota: /estados/update/{id}
      Fomato JSON esperado: { "nome": String, "populacao": Number, "linguaMae": String, "pib": Number }

### Caso o objeto seja atualizado com sucesso, a API retornará o seguinte JSON:

      { "message": "Atualizado com sucesso" }

## Excluindo um objeto (DELETE)

### Para deletar um objeto de alguma collection, deverá ser informado o ID do objeto na rota.

#### Para deletar um objeto na collection _CIDADES_:

      Rota: /cidades/delete/{id}

#### Para deletar um objeto na collection _ESTADOS_:

      Rota: /estados/update/{id}

#### Para deletar um objeto na collection _PAISES_:

      Rota: /estados/update/{id}

### Caso o objeto seja deletado com sucesso, a API retornará o seguinte JSON:

      { "message": "Deletado com sucesso" }
