const [express, bodyParser, morgan, cors, config] = [
  require("express"),
  require("body-parser"),
  require("morgan"),
  require("cors"),
  require("./config/configuracion"),
];
/**
 * BASE DE DATOS
 * Al fichero de base de datos solo necesitamos requerirlo para que esté disponible en la aplicación
 * No hace falta asignarla a una variable, ya que no utilizaremos ningún método o función desde app.js.
 */
require("./databases/mongodb");

const [rtsProducto, rtsUsuario, rtsCliente, rtsRoot, rtsPedido] = [
  require("./routes/producto"),
  require("./routes/usuario"),
  require("./routes/cliente"),
  require("./routes/saludar"),
  require("./routes/pedidos"),
  // const routes = require('./routes/routes')
];

// Instantiate a new Express application
const app = express();

/**
 * MIDDLEWARES
 * morgan mide tiempos de respuestas get post, etc y realiza logs en terminal
 * bodyParser.json() es el encargado de que una petición POST coloque los parámetros en req.params o nos facilite los archivos de haberlos.
 */
app.use([
  morgan("dev"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  cors(),
]);

/**
 * MANEJO DE ERRORES
 * https://expressjs.com/es/guide/error-handling.html
 */

/**
 * ROUTES
 */
app.use("/", rtsRoot);
app.use("/producto", rtsProducto);
app.use("/usuario", rtsUsuario);
app.use("/cliente", rtsCliente);
app.use("/pedidos", rtsPedido);
// app.use(routes);

/**
 * SERVER
 */
app.listen(config.PORT, (err) => {
  if (err) {
    console.error("[------>] Servidor ERROR: \n\n" + err);
  } else {
    console.info(
      `\x1b[1m\x1b[34m[------>] Servidor CORRIENDO =>\x1b[0m localhost:\x1b[1m\x1b[34m${config.PORT}`
    );
  }
});
