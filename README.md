## graphQLapi
Repositório de Estudos sobre API's com GraphQL 
Código fonte hospedado em : [https://son-graphql-api.herokuapp.com/](https://son-graphql-api.herokuapp.com/).


# 1. Instruções para o Desenvolvimento.

Este passo a passo irá orientar a como executar o projeto:

## 1.1. Dependencias e Configurações:


### 1.1.1 Corrigindo Permissões dos Containers (somente quando a primeira execução). 

```
$ docker-compose run app sudo chown -R ambientum:ambientum /home/ambientum
```

### 1.1.2 Instalando as Dependências (quando for necessário).

```
$ docker-compose run app yarn
```

### 1.1.3 Criando o seu Arquivo de Variáveis de Ambiente.

* Copie o arquivo `.env.example` para um novo arquivo com o nome de `.env`;
* Altere o conteúdo do arquivo colocando os valores desejados nas variáveis de ambiente já definidas;
* Salve o arquivo.

> Abaixo podemos ver um exemplo de como ficará nosso arquivo de `enviroment` (.env).

.env
```
# Application Variables
URL=localhost
PORT=3000

# MongoDB Variables for Container Inicialization
MONGO_INITDB_ROOT_USERNAME=usuario_root
MONGO_INITDB_ROOT_PASSWORD=senha_root
MONGO_INIT_PORT=27017

# MongoDB Variables for Connection
MONGODB_HOST=mongo
MONGODB_USER=usuario
MONGODB_PASSWORD=senha
MONGODB_DATABASE=base_de_dados_a_ser_criada
```

### 1.1.4 Criando/Alterando o Arquivo de Inicialização da Base de Dados MongoDB.

initdb.js
```
/* eslint-disable */
db.createUser(
  {
    user: '<usuário para a base de dados a ser criada>',
    pwd: '<senha do usuário>',
    roles: [
      {
        role: 'readWrite',
        db: '<base de dados a ser criada>'
      }
    ]
  }
)
```

> Substitua todos os valores `< ... >` pelos valores equivalentes de suas variáveis de ambiente. Respectivamente `MONGODB_USER`, `MONGODB_PASSWORD`, `MONGODB_DATABASE`.

### 1.1.5 Criando e Inicializando a Base de Dados no MongoDB (somente quando a primeira execução).

```
$ docker-compose run --rm --name mongo-graphQL mongo
```

> Após executar o comando acima, quando for apresentado na tela do terminal a mensagem `waiting for connections on port ...`, basta pressionar as teclas `CTRL+C` para interromper a execução do container que a base dados estará criada e inicializada.

## 1.2. Executando o Projeto:

```
$ docker-compose up
```

## 1.3. Configuração Opcional do Host Virtual (é muito indicado):

Recomendamos que seja utilizado `graphqlapi.local` como o host virtual, pois trabalharemos no desenvolvimento com referências apontando para `http://graphqlapi.local:3000`

## 1.4. Links e Portas:

| Resource        | Value                                               |
| -               | -                                                   |
| Application     | http://graphqlapi.local:3000                        |
| GraphiQL        | http://graphqlapi.local:3000/graphiql               |
| MongoDB         | mongodb://graphQLapi:graphQLapi@mongo/graphQLapi    |


## Todo

~~Implementar retorno dos campos `created_at` e `updated_at` na API GraphQL.~~
