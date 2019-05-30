/**
 * Arquivo: initdb.js
 * Descrição: Arquivo de Criação e Inicialização da Base de Dados da Aplicação
 *
 * Data de Criação: 30/05/2019
 */

/* eslint-disable */
db.createUser(
  {
    user: 'graphQLapi',
    pwd: 'graphQLapi',
    roles: [
      {
        role: 'readWrite',
        db: 'graphQLapi'
      }
    ]
  }
)
