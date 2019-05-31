/**
 * Arquivo: initdb.js
 * Descrição: Arquivo de Criação e Inicialização da Base de Dados da Aplicação
 *
 * Data de Criação: 30/05/2019
 */

/* eslint-disable */
db.createUser(
  {
    user: 'graphqlapi',
    pwd: 'graphqlapi',
    roles: [
      {
        role: 'readWrite',
        db: 'graphqlapi'
      }
    ]
  }
)
