/**
 * Cadena de conexion a base de datos. Los Nombres de las DB en Mongo son CASE-INSENSITIVE
 */
let URI = "mongodb://localhost/tienda",
  atlas ="agregar cadena Atlas";

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
