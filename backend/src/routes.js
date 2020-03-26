const express = require('express'); //Importando o express para a variável express

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs',  OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

//request e response é padrão do express
/*
routes.get('/', (request, response) => {    
    //return response.send('Hello World');    
    return response.json({         
        evento: "Semana Omnistack"        
        ,aluno: "Roberto Giffone"    
    });
}); //Rota
*/

/*
Tipos de parâmetros

Query params: parâmetros nomeados enviados na rota após "?"
Route params: parâemtrso utilizados para identificar recursos
Request body: corpo da reuisição, utilizaod para criar ou alterar recursos
*/ 

//Utilizar banco SQLite

/*
routes.get('/users', (request, response) => {
//routes.get('/users/:id', (request, response) => { //Route params       
    
    //Query params
    //const params = request.query; //Enviados via get após o ?
    //console.log(params); //Imprime no console(Power Shell) todos os parâmetros passados no get

    //Route params
    //const params = request.params; //Enviado após a barra, conforme utilizo em url amigável
    //console.log(params);

    return response.json({         
        evento: "Semana Omnistack"        
        ,aluno: "Roberto Giffone"    
    });
}); //Rota
*/

//Request body
/*
routes.post('/users', (request, response) => {
    //const params = request.body; //Enviados no corpo do Insomnia. String em formato json no body do Insomnia
    //console.log(params);   

    return response.json({         
        evento: "Semana Omnistack"        
        ,aluno: "Roberto Giffone"    
    });
}); //Rota
*/

module.exports = routes;