const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017';
const db = mongoose.connect(url);
 mongoose.connection.on('connected', () => console.log('Conectado ao MongoDB!')); 
 mongoose.connection.on('error', (err) => console.log('Erro: ' + err));

 module.exports = db;