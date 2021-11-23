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

     {
    "_id": "619cd3ec2a47dc002371ceda",
    "nome": "Counter Strike",
    "lancamento": "1996-01-09T00:00:00.000Z",
    "desenvolvedora": "Valve Ltda.",
    "tipo": "ação",
    "__v": 0

     },
     {
     "\_id": "619cd9bc2a47dc002371cee7",
     "nome": "Counter Strike",
     "lancamento": "1996-01-09T00:00:00.000Z",
     "desenvolvedora": "Valve",
     "tipo": "ação",
     "\_\_v": 0
     }

## Listando objeto específico (GET)

### Deverá ser passado um parametro(id) na rota _/{collection}/listid/{id}_, exemplo:

        /acao/listid/619cd9bc2a47dc002371cee7
        /corrida/listid/{id}
        /estrategia/listid/{id}
        /futebol/listid/{id}

## Adicionando novos objetos (POST)

### Para adicionar um novo objeto a alguma collection, deverá ser enviado um JSON com os campos e dados corretos, caso contrário a aplicação retornará uma mensagem de erro. O tipo de filme precisa ser compativel com a rota.

Exemplo: se a rota for de filme de ação o valor da propridade "tipo" deve ser "ação" caso contrário retornará erro.

#### Para adicionar um novo objeto em qualquer uma das collections

      Rota: /{{collection}}/add
      Fomato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }

### Caso exista algum problema com os dados do JSON enviado, a aplicação retornará:

      {"message": "Objeto inválido. Algum campo está com valor vazio."}

### Caso o tipo do filme informado seja incompativel com a rota usada:

      {"message": "Objeto inválido. O tipo do jogo deve ser do tipo {{collection}}"}

### Caso o objeto seja adicionado com sucesso, a API retornará o seguinte JSON:

      { "message": "Cadastrado com sucesso" }

## Atualizando um objeto (PUT)

### Para atualizar um objeto de alguma collection, deverá ser informado o ID do objeto na rota, e enviado um JSON com os novos valores através do método PUT.

#### Para atualizar qualquer um dos objetos:

      Rota: /{collection}/update/{id}
      Fomato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }

### Caso o objeto seja atualizado com sucesso, a API retornará o seguinte JSON:

      { "message": "Atualizado com sucesso" }

## Excluindo um objeto (DELETE)

### Para deletar um objeto de alguma collection, deverá ser informado o ID do objeto na rota.

#### Para deletar qualquer um dos objetos:

      Rota: /{collection}/delete/{id}

### Caso o objeto seja deletado com sucesso, a API retornará o seguinte JSON:

      { "message": "Deletado com sucesso" }
