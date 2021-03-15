
# Mike Bank - Frontend

Projeto criado em cima do boilerplate: [Create React App](https://github.com/facebook/create-react-app).

## Rodando o frontend

Os requisitos são: `yarn` e `node` instalados na máquina.

Caso tudo esteja instalado, rode o comando: `yarn start`;

## Sobre o frontend

Tentando seguir um fluxo de desenvolvimento de software completo, o primeiro passo deste frontend foi criar esboços para as páginas principais da aplicação. Este esboço visa criar um guia para a componentização da aplicação aplicando princípios de `Atomic Design`.

O esboço pode ser visualizado [no figma](https://www.figma.com/file/tmo44ATVuCRSh27JUxHkTg/Untitled?node-id=0%3A1).

## A estrutura do projeto

Todos os diretórios estão dentro da pasta `src`. Os diretórios são:

`api` - contém a configuração do client do `axios`, lib utilizada para fazer as requisições para o server. 

`components` - contém átomos, moléculas, organismos e templates

`hooks` - contém custom hooks que fazem controle de chamadas para o server, utilizando do `useAxios`

`pages` - contém cada página da aplicação, utilizando-se dos demais componentes para montá-las

`styles` - definições globais de estilo

## JWT

É importante notar que, neste projeto, o `token` do usuário é salvo no `sessionStorage` através da `key: mikeBankToken`. Este token tem expiração de `900s`, mas pode ser alterado no arquivo `../server/configs/auth.js`.
