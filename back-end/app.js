const express = require("express");
const app = express();
const sequelize = require("./dbConnection");

const userRoutes = require("./routes/user.route").router;



//intercepte content-type json et le reprends dans req.body  
app.use(express.json());

//CORS on co back et front
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});




//ROUTES
app.use('/api/user', userRoutes);
;

//CO BDD
// connexion avec la bdd
sequelize.initDb();

app.use((req, res) => {
  res.json({ message: "La requête a bien été reçu !" });
});

module.exports = app;
