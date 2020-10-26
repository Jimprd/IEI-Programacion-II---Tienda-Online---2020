const [mongoose, colors] = [require("mongoose"), require("colors")];
const config = require("../config/configuracion");

/**
 * Conectar a DB
 */
mongoose.connect(config.db.URI, config.db.deprecationWarnings);

/**
 * Detectando ENVENTOS en la conexión de MONGOOSE
 */
mongoose.connection.on("connected", () => {
  console.info(
    colors.blue.bold(
      `[------>] Mongoose CONECTADO => ${colors.reset(
        mongoose.connection.host
      )}:${colors.blue.bold(mongoose.connection.name)}\n`
    )
  );
});
// Monitorea errores en la conexión
mongoose.connection.on("error", (err) => {
  console.error(
    colors.red.bold("\x1b[5m[------>]\x1b[0m") +
      colors.red.bold(" Mongoose ERROR: \n\n") +
      colors.reset(err)
  );
});
// Monitorea un evento de desconexión
mongoose.connection.on("disconnected", () => {
  console.error(
    colors.red.bold("\x1b[5m[------>]\x1b[0m") +
      colors.red.bold(" Mongoose Desconectado.")
  );
});

/**
 * Escucha de eventos según lasinstrucciones en la pagina web de mongoose.
 * Una vez que se abra nuestra conexión, se llamará a nuestro callback:
 */
/**
 * mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
 * mongoose.connection.once('open', () => {console.log('[------>] Mongoose.once() conectado a DB: localhost/tienda\n')});
 */
/**
 * Creando notificación para cuando cierra la conexion mongoose
 */
// const desconexion = (msg, callback) => {
//   mongoose.connection.close(() => {
//     console.log(`Mongoose cierra la conexión: ${msg}`);
//     callback();
//   });
// };

/**
 * Creando notificación para cuando se reinicia nodemon
 */
process.once("SIGUSR2", () => {
  desconexion("Nodemoon Se Reinicia", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});
/**
 * Notificación para cuando se finaliza la app
 */
process.once("SIGINT", () => {
  desconexion("Nodemoon se reinicia", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

/**
 * No es necesario exportar este módulo, a menos que necesitemos invocar alguna de sus funciones
 * en alguna otra parte de la aplicación. De momento solo haremos un require desde app.js
 * module.exports = mongoose;
 */
