# API - Projeto 3 do Módulo 3 BlueEdTech
Essa é uma API criada utilizando as aulas do Módulo 3 de Back End em NodeJS da BlueEdTech.

A idéia é criar um CRUD para várias collections diferentes no MongoDB.

Linguagem Utilizada: *JavaScript*
Banco de dados: *MongoDB Atlas*

## Collections utilizadas
      acao
      corrida
      estrategia
      futebol
      terror

## Iniciando o aplicativo
    npm start

## URL Base
    https://aplicacao-projeto2.herokuapp.com/
## Listando os objetos (GET)
        /acao/listall
        /corrida/listall
        /estrategia/listall
        /futebol/listall
        /terror/listall
## Os retornos da aplicação estão no formato JSON, exemplo:
### Retorno de /acao/listall

        
 ## Listando objeto específico (GET)
 ### Deverá ser passado um parametro(nome) na rota */{collection}/listname/{nome}*, exemplo:
        /acao/listname/Tatui
        /corrida/listname/São Paulo
        /estrategia/listname/Brasil
        /futebol/listname/Brasil
        /terror/listname/Brasil

 ## Adicionando novos objetos (POST)
 ### Para adicionar um novo objeto a alguma collection, deverá ser enviado um JSON com os campos e dados corretos, caso contrário a aplicação retornará uma mensagem de erro.
 #### Para adicionar um novo objeto na collection *ACAO*:
      Rota: /acao/add
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 #### Para adicionar um novo objeto na collection *CORRIDA*:
      Rota: /corrida/add
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 #### Para adicionar um novo objeto na collection *ESTRATEGIA*:
      Rota: /estrategia/add
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 #### Para adicionar um novo objeto na collection *FUTEBOL*:
      Rota: /futebol/add
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }     
 #### Para adicionar um novo objeto na collection *TERROR*:
      Rota: /terror/add
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 ### Caso exista algum problema com os dados do JSON enviado, a aplicação retornará:
      {"messagem": "Objeto inválido. Preencha todos os campos."}
 ### Caso o objeto seja adicionado com sucesso, a API retornará o seguinte JSON:
      { "message": "Cadastrado com sucesso" }

 ## Atualizando um objeto (PUT)
 ### Para atualizar um  objeto de alguma collection, deverá ser informado o ID do objeto na rota, e enviado um JSON com os novos valores através do método PUT.

 #### Para atualizar um novo objeto na collection *ACAO*:
      Rota: /acao/update/{id}
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 #### Para adicionar um novo objeto na collection *CORRIDA*:
      Rota: /corrida/update/{id}
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 #### Para adicionar um novo objeto na collection *ESTRATEGIA*:
      Rota: /estrategia/update/{id}
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String } 
 #### Para adicionar um novo objeto na collection *FUTEBOL*:
      Rota: /futebol/update/{id}
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }
 #### Para adicionar um novo objeto na collection *TERROR*:
      Rota: /terror/update/{id}
      Formato JSON esperado: { "nome": String, "lancamento": Date, "desenvolvedora": String, "tipo": String }                  
 ### Caso o objeto seja atualizado com sucesso, a API retornará o seguinte JSON:
      { "message": "Atualizado com sucesso" }

## Excluindo um objeto (DELETE)
 ### Para deletar um  objeto de alguma collection, deverá ser informado o ID do objeto na rota.

 #### Para deletar um objeto na collection *ACAO*:
      Rota: /acao/delete/{id}
 #### Para deletar um objeto na collection *CORRIDA*:
      Rota: /corrida/update/{id}
 #### Para deletar um objeto na collection *ESTRATEGIA*:
      Rota: /estrategia/update/{id}
#### Para deletar um objeto na collection *FUTEBOL*:
Rota: /futebol/update/{id}
 #### Para deletar um objeto na collection *TERROR*:
      Rota: /terror/update/{id}
 ### Caso o objeto seja deletado com sucesso, a API retornará o seguinte JSON:
      { "message": "Deletado com sucesso" }
