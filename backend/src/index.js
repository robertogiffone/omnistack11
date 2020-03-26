const express = require('express'); //Importando o express para a variável express
const cors = require('cors');
const routes= require('./routes'); //Arquivo routes.js criado. Caso precise voltar diretório seria ../


const app = express();

app.use(cors());
app.use(express.json()); //para reconhecer o body enviado como json
app.use(routes);

app.listen(3333);