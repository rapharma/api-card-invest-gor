## Instalação

Para instalar as dependencias digite `npm i`.

## Inicialização

Para inicializar digite `node server.js`.

## Ambientes

BaseUrl Local: http://localhost:3000 
BaseUrl Heroku: https://api-card-invest-gor.herokuapp.com

## Chamadas a Api

Print de uma chamada a api -> https://ibb.co/9sDbNZd

## Exemplo de cadastro de usuário

BaseUrl/auth/register

POST

HEADER
Content-Type: application/json
Authorization: Bearer token

BODY
{
	"name": "Caco",
	"email": "caco@email.com.br",
	"password": "banana"
}

RESPONSE
{
  "mensagem": "Logged successfully!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzgwNWNkZjg0YzU0MDAwNDljZGQ5YyIsImlhdCI6MTYwNjk3NDk5MywiZXhwIjoxNjA3MDYxMzkzfQ.9rbJ7KjJMGSljqFJJCfc8FUf4HB2IigYxLxwacx4kEA"
}

--------------------------------------------------

## Autenticação

BaseUrl/auth/authenticate

POST

HEADER
Content-Type: application/json
Authorization: Bearer token

BODY
{
	"email": "caco@gmail.com",
	"password": "banana"
}

--------------------------------------------------

## Lista de investimentos
BaseUrl/card-invest/investment

GET

HEADER
Content-Type: application/json
Authorization: Bearer token

{
  "investments": [
    {
      "_id": "5fc6d7269408440004ffaf2a", // IdInvestimento
      "type": "Fixed Income",
      "value": 0.11,
      "date": "2020-12-12T00:00:00.000Z",
      "user": "5fc82bfa22fff0000499d3b2",
      "createdAt": "2020-12-01T23:52:06.318Z",
      "__v": 0
    },
  ]}
    

--------------------------------------------------

## Inserir investimento
BaseUrl/card-invest/investment

POST

HEADER
Content-Type: application/json
Authorization: Bearer token

BODY
{
	"type": "Fixed Income",
	"value": 291,
	"date": "2020/11/26"
}

-------------------------------------------

## Atualizar investimento
BaseUrl/card-invest/investment/IdInvestimento

PUT

HEADER
Content-Type: application/json
Authorization: Bearer token

BODY
{
	"type": "Fixed Income", // or  "Variable Income"
	"value": 250,
	"date": "2020-11-26"
}

-----------------------------------------------

## Deletar investimento
BaseUrl/card-invest/investment/IdInvestimento

DELETE

HEADER
Content-Type: application/json
Authorization: Bearer token

## Versão futura

Implementação de cryptografia
