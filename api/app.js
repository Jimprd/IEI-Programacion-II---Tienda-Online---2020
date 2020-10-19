const [express, bodyParser, morgan, cors] = [require('express'), require('body-parser'), require('morgan'), require('cors')]; 

// require('./databases/mongodb');
const mongodb = require('./databases/mongodb'); // carga el módulo y parece que mágicamente se conecta a la DB en tiempo de ejecucion. Si no hago esto no se conecta, en el tutorial hacía un metodo (VERRRRR).

const rtsProducto = require('./routes/producto')
    , rtsUsuario = require('./routes/usuario')
    , rtsCliente = require('./routes/cliente')
    // , rtsPedido = require('./routes/pedido');
// const routes = require('./routes/routes');


// Instantiate a new Express application.
const app = express();


//MIDDLEWARES
app.use(morgan('dev')); // tiempos de respuestas get post, etc
app.use(bodyParser.json()); // body-parser es el encargado de que una petición POST coloque los parámetros en req.params o nos facilite los archivos de haberlos.
app.use(bodyParser.urlencoded({extended: false}));// 

app.use(cors());

//ROUTES
app.use('/producto', rtsProducto);
app.use('/usuario', rtsUsuario);
app.use('/cliente', rtsCliente);
// app.use('/pedido', rtsPedido);
// app.use(routes);



// SERVER 
app.listen(4000, (err) => {
    if(err) console.error('console.error: ' + err);
    console.info('\x1b[1m\x1b[34m[------>] Servidor CORRIENDO =>\x1b[0m localhost:3000');
});
