const express = require("express");
const app = express();

//intercepte content-type json et le reprends dans req.body  
//possible aussi ac Body-parser
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

//Route GET des profil  INSCRIPTION
app.get("/api/profil", (req, res, next) => {
  const profil = [
    {
      id: "",
      name: "",
      departement: "",
      imageUrl: "",
      createdAt: "",
      email: "",
      allPost: "",
    },
  ];
  res.status(200).json(profil);
});

app.post('/api/profil', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'objet créé'
  })
});


app.use((req, res) => {
  res.json({ message: "La requête a bien été reçu !" });
});

module.exports = app;
