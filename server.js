const express = require('express');
const bodyParser = require('body-parser');
const validarUsuario = require('./api/validarUsuario');

const app = express();
app.use(bodyParser.json());

app.post('/api/validarUsuario', validarUsuario);

app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});
