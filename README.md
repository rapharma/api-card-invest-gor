## Instalação

Para instalar as dependencias digite `npm i`.

## Inicialização

Para inicializar digite `node server.js`.

## Versão futura

Implementação de cryptografia

## Chamadas

BaseUrl = http://localhost:3000 ou https://api-card-invest-gor.herokuapp.com

![Exemplo de chamadas](https://ibb.co/Y2ZFd03)

-Exemplo de cadastro de usuário

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

-Autenticação

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

-Lista de investimentos
BaseUrl/card-invest/investment

GET

HEADER
Content-Type: application/json
Authorization: Bearer token

--------------------------------------------------

-Inserir investimento
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

-Atualizar investimento
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

-Deletar investimento
BaseUrl/card-invest/investment/IdInvestimento

DELETE

HEADER
Content-Type: application/json
Authorization: Bearer token

