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
        /cidades/listname/Tatui
        /estados/listname/São Paulo
        /paises/listanme/Brasil
            
 ## Adicionando novos objetos (POST)
 ### Para adicionar um novo objeto a alguma collection, deverá ser enviado um JSON com os campos e dados corretos, caso contrário a aplicação retornará uma mensagem de erro.
 #### Para adicionar um novo objeto na collection *CIDADES*:
      Rota: /cidades/add
      Fomato JSON esperado: { "nome": String, "qtdBairros": Number, "populacao": Number, "dtAniversario": Date }
 #### Para adicionar um novo objeto na collection *ESTADOS*:
      Rota: /estados/add
      Fomato JSON esperado: { "nome": String, "regiao": String, "populacao": Number, "vlrSalarioMin": Number }
 #### Para adicionar um novo objeto na collection *PAISES*:
      Rota: /estados/add
      Fomato JSON esperado: { "nome": String, "populacao": Number, "linguaMae": String, "pib": Number }
 ### Caso exista algum problema com os dados do JSON enviado, a aplicação retornará:
      {"messagem": "Objeto inválido. Algum campo está com valor vazio."}
 ### Caso o objeto seja adicionado com sucesso, a API retornará o seguinte JSON:
      { "message": "Cadastrado com sucesso" }
      
 ## Atualizando um objeto (PUT)
 ### Para atualizar um  objeto de alguma collection, deverá ser informado o ID do objeto na rota, e enviado um JSON com os novos valores através do método PUT.

 #### Para atualizar um novo objeto na collection *CIDADES*:
      Rota: /cidades/update/{id}
      Fomato JSON esperado: { "nome": String, "qtdBairros": Number, "populacao": Number, "dtAniversario": Date }
 #### Para adicionar um novo objeto na collection *ESTADOS*:
      Rota: /estados/update/{id}
      Fomato JSON esperado: { "nome": String, "regiao": String, "populacao": Number, "vlrSalarioMin": Number }
 #### Para adicionar um novo objeto na collection *PAISES*:
      Rota: /estados/update/{id}
      Fomato JSON esperado: { "nome": String, "populacao": Number, "linguaMae": String, "pib": Number }        
 ### Caso o objeto seja atualizado com sucesso, a API retornará o seguinte JSON:
      { "message": "Atualizado com sucesso" }
     
## Excluindo um objeto (DELETE)
 ### Para deletar um  objeto de alguma collection, deverá ser informado o ID do objeto na rota.

 #### Para deletar um objeto na collection *CIDADES*:
      Rota: /cidades/delete/{id}
 #### Para deletar um objeto na collection *ESTADOS*:
      Rota: /estados/update/{id}
 #### Para deletar um objeto na collection *PAISES*:
      Rota: /estados/update/{id}
 ### Caso o objeto seja deletado com sucesso, a API retornará o seguinte JSON:
      { "message": "Deletado com sucesso" }
