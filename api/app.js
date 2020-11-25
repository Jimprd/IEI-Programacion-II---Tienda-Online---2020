const [express, bodyParser, morgan, cors, config] = [
  require("express"),
  require("body-parser"),
  require("morgan"),
  require("cors"),
  require("./config/configuracion"),
];

/**
 * BASE DE DATOS
 */
require("./databases/mongodb");

/**
 * IMPORTAR ROUTERS
 */
const [rtsProducto, rtsCategoria, rtsUsuario, rtsCliente, rtsPedido, rtsRoot] = [
  require("./routes/producto"),
  require("./routes/categorias"),
  require("./routes/usuarios"),
  require("./routes/clientes"),
  require("./routes/pedidos"),
  require("./routes/saludar"),
  // const routes = require('./routes/routes')
];

// Instantiate a new Express application
const app = express();

/**
 * MIDDLEWARES
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
app.use("/categorias", rtsCategoria);
app.use("/usuarios", rtsUsuario);
app.use("/clientes", rtsCliente);
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
