# Mike Bank - Backend

## Rodando o backend

Os requisitos são: `yarn` e `node` instalados na máquina.

Caso tudo esteja instalado, rode o comando: `yarn start`;

## Autenticação

Este projeto utiliza JWT para realizar a manutenção da autenticação do usuário através de seu token. Algumas rotas desta  API são exclusivamente autenticadas, portanto, para conseguir utilizá-las, deve-se passar o header `Authorization: Bearer {token}`. Para gerar um token, é necessário ter um usuário e autenticá-lo na respectiva rota.

Abaixo, as possíveis rotas da aplicação:

## Rotas não-autenticadas:

***Criar um Usuário***
----
  Cria um novo usuário no banco de dados;

* **URL**

  /user/

* **Método:**

  `POST`

* **Caso de Sucesso:**

  * **Código HTTP:** 201 <br />
    **Body:** `{ status : 'Success'}`
 
* **Caso de Falha:**

  * **Code:** 400 <br />
    **Content:** `{error: 'Erro ao criar usuário no banco: <sqlError>'}`

___
***Autenticar um Usuário***
----
  Verificar se o usuário está passando a senha correta

* **URL**

  /user/login

* **Método:**

  `POST`

* **Caso de Sucesso:**

  * **Código HTTP:** 200 <br />
    **Body:** `{ status : 'Authenticated', token: '<token>'}`
 
* **Caso de Falha:**

  * **Code:** 401 <br />
    **Content:** `{status: 'Unauthenticated'}`

___

## Rotas que necessitam autenticação:

Todas rotas a seguir, caso não seja enviado o `token` no `header` retornarão erro `401`. Caso o token seja enviado mas já tenha sido expirado ou inválido, a rota retornará `400`.


***Buscar um usuário***
----
  Buscar os dados do usuário.

* **URL**

  /user/

* **Método:**

  `GET`

* **Caso de Sucesso:**

  * **Código HTTP:** 200 <br />
    **Body:** `{ id : 1, name: 'name', balance: 1, password: 'hash'}`

* **Caso de Falha:**

  * **Code:** 404 <br />
    **Content:** `{error: 'Erro ao consultar no banco: <sqlError>'}`

___
***Criar uma transação***
----
  Adiciona uma transação apontando como autor o autor da request.

* **URL**

  /transaction/

* **Método:**

  `POST`

* **Caso de Sucesso:**

  * **Código HTTP:** 201 <br />
    **Body:** `{ status : 'Success'}`

* **Caso de Falha:**

  * **Code:** 400 <br />
    **Content:** `{error: 'Erro ao criar transação: <sqlError>'}`
    
___
***Buscar transações***
----
  Busca todas transações de um respectivo usuário

* **URL**

  /transaction/user

* **Método:**

  `GET`

* **Caso de Sucesso:**

  * **Código HTTP:** 201 <br />
    **Body:** `{[{"id": 1, "kind": "KIND", "author": 1, "amount": 1, date: "11:11:11 13-03-2011"}]}`

* **Caso de Falha:**

  * **Code:** 404 <br />
    **Content:** `{error: 'Erro ao buscar transação no banco: <sqlError>'}`