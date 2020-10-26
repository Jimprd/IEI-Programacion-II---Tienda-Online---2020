/**
 * Cadena de conexion a base de datos. Los Nombres de las DB en Mongo son CASE-INSENSITIVE
 */
let URI = "mongodb://localhost/tienda",
  atlas =
    "mongodb+srv://jimpd:4etwtGYCUWaFWH6@tienda.nsn2f.mongodb.net/tienda?retryWrites=true&w=majority";

if (process.env.NODE_ENV === "production") {
  URI = "URI de conexion a mongo con heroku";
}

module.exports = {
  PORT: process.env.PORT || 4000,
  db: {
    URI,
    deprecationWarnings: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
};
