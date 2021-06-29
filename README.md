<div align="center">
    <img src="https://i.imgur.com/SbhNaFr.png" alt="Image  of NLW Together">
</div>
<br>
<br>

# Indice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-comoaixar-o-projeto)
- [Banco de dados](#-banco-de-dados)

## 📣 Sobre
Aplicação desencolvida durante o evento **NLW Together**, promovida pela **[RocketSeat](https://rocketseat.com.br/)**. O projeto consiste em uma aplicação Back-end, a qual foi utilizada para criar um sistema de usuários, elogios e tags.


## 🔧 Tecnologias Utilizadas

O projeto foi desenvolvido aplicando as seguintes tecnologias.

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [SQLite](https://www.sqlite.org/docs.html)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/) (Json Web Token)
- [class-transformer](https://github.com/typestack/class-transformer)

## 📦 Como baixar o projeto

1.  Clonar o repositório
```bash
$ git clone https://github.com/joaovictor-AC/NLW-Project.git
``` 
2. Entrar no diretório
```bash
$ cd NLW-Project
```
3. Instalar as dependências
### **NPM**
```bash
$ npm install
``` 
### **Yarn**

Caso o gerenciador de pacotes `yarn` esteje instalado na máquina, para instalar as dependências irá ser escrever o seguinte comando:

```bash
$ yarn
```
4. Inciando o projeto

```bash
# NPM
$ npm run dev

#Yarn
$ yarn dev
```

## 🖥 Banco de dados

Para possibilitar a observação de todas as tabelas fornecidas pela aplicação, é necessário instalar o **[BeeKeeper Studio](https://www.beekeeperstudio.io/)** como sendo o gerenciador de banco de dados.<br>
Primeiramente, coloque o tipo da conexão como SQLite, em seguida, procure pelo arquivo **database.sqlite** no proejeto clonado e, depois, coloque-o no campo "Database File". Por fim, aperte o botão "Test" para verificar se a conexão ocorrerá com êxito e, após ,clique em "Connect"

![Image Beekeeper](/assests/beekeeper.png)