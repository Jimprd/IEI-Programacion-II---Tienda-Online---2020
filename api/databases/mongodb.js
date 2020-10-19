const mongoose = require('mongoose');

// Define conexion a base de datos. Nombre de las Bases de Datos son CASE-INSENSITIVE
mongoose.connect('mongodb://localhost/tienda', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Para recibir notificación de si nos conectamos correctamente o si se produce un error de conexión
// escuchamos eventos en la conexión de mongoose  
mongoose.connection.on('connected', () => {console.info(`\x1b[1m\x1b[34m[------>] Mongoose CONECTADO =>\x1b[0m ${mongoose.connection.host}:${mongoose.connection.name}\n`)});
mongoose.connection.on('error', err => {console.error(`\x1b[5m\x1b[1m\x1b[31m[------>]\x1b[0m Mongoose: ${err}`)});
mongoose.connection.on('disconnected', () => {console.error('\x1b[5m\x1b[1m\x1b[31m[------>]\x1b[0m Mongoose desconectado')});

// Escuchando eventos segun la pagina web de mongoose. Una vez que se abra nuestra conexión, se llamará a nuestro callback
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connection.once('open', () => {console.log('[------>] Mongoose.once() conectado a DB: localhost/tienda\n')});


// Funcion para cuando cierra la conexion mongoose
const saludosCordiales = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose desconectado a través de: ${msg}`);
        callback();
  });
};


// Para cuando se reinicia nodemon




module.exports = mongoose;
