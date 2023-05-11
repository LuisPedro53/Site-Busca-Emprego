const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const database = require('../Site-Busca-Emprego/db/connection');
const bodyParser = require('body-parser');


const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O express listening on port ${PORT}`);
});

// Configura o bodyParser para permitir que a aplicação possa lidar com dados enviados por formulários HTML
app.use(bodyParser.urlencoded({ extended: false }));


//handle bars
// Define o diretório que contém os templates do Handlebars
app.set('views', path.join(__dirname, 'views'));

// Registra o Handlebars como o mecanismo de template padrão
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// Define o mecanismo de template que deve ser usado
app.set('view engine', 'handlebars');

// Conecta à base de dados
database
  .authenticate()
  .then(() => {
    console.log('Conectou ao banco com sucesso');
  })
  .catch(err => {
    console.log("Ocorreu um erro", err);
  });

// Define uma rota de teste para a página inicial
app.get('/', (req, res) => {
  res.send("Está funcionando 8...");
});


// Define uma rota para a seção "jobs" do site, utilizando um router
app.use('/jobs', require('./routes/jobs'));