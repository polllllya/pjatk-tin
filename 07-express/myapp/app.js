const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Importowanie modelu artykułu (zdefiniowanego w pliku articleModel.js), który obsługuje operacje na danych artykułów.
const Article = require("./models/articleModel");

//Ustawianie tras
//Kontroler otrzymuje model artykułu (Article) jako argument
const articleRoutes = require("./controllers/articleController")(Article);
app.use("/articles", articleRoutes);

app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
