# Pizzaria Dom Henrique

Este projeto está sendo feito por mim e por @GabrielPeresBernes, para facilitar a revisão de conteúdos da turma de Fullstack da Digital House em que atuamos.

É um projeto com intuito de explicar e revisar os seguintes temas:

- HTML
- EJS
- Rotas
- Middlewares
- Padrão MVC
- Controllers
- Utilização de todos os métodos HTTP no frontend (GET, POST, PUT/PATCH e DELETE)
- Sequelize e Banco de Dados

## Requisitos

O projeto necessita de

- Node 14 ou mais recente
- NPM
- Acesso a um banco de dados MySQL

## Como inciar

Para iniciar esse projeto, você deve:

1. Executar clonar esse repositório:

```sh
git clone https://github.com/carvalholeo/pizzaria-dom-henrique.git pizzaria
```

2. Entre no diretório e realize o download das dependências

```sh
cd pizzaria
npm install
```

3. Faça uma cópia do arquivo de variáveis de ambiente

```sh
cp .env.example .env
```

4. Altere o arquivo `.env` conforme o seu ambiente, seguindo as orientações do arquivo

5. Por fim, execute o projeto (...)

```sh
npm start
```

(...) e acesse na porta especificada no arquivo `.env` (o padrão é a porta 5000), [http://localhost:5000](http://localhost:5000).

## O que o projeto usa

- BCrypt (lib para gerar e comparar hashes), versão 5.0.1
- Dotenv (lib para variáveis de ambiente), versão 16.0.0
- EJS (lib para gerar HTML dinâmico a partir de templates), versão 3.1.6
- Express (framework para HTTP), versão 4.17.2
- Express Session (middleware para lidar com sessões), versão 1.17.2
- Method Override (lib para lidar com mais métodos que os disponíveis no HTML), versão 3.0.0
- Multer (lib para lidar com upload de arquivos), versão 6.16.3
- Sequelize (ORM para Node), versão 6.16.3

## Licença

Este projeto está licenciado sob a licença MIT. Esta pode ser consultada em [LICENSE](LICENSE).

Note que ao usar esse projeto, você concorda que leu e aceitou a licença.
