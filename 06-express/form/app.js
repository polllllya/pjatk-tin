const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Inicjalizuje aplikację Express.
const app = express();
const port = 3000;

//Dodaje middleware body-parser, który parsuje dane przesyłane w formie urlencoded (np. dane z formularzy HTML)
app.use(bodyParser.urlencoded({ extended: true }));

//Ustawia silnik widoków na EJS (Embedded JavaScript), co umożliwia dynamiczne generowanie HTML na podstawie danych.
app.set("view engine", "ejs");

//Ustawia katalog, w którym znajdują się szablony widoków.
app.set("views", path.join(__dirname, "views"));

//Dodaje middleware, które obsługuje statyczne pliki, takie jak arkusze stylów (CSS)
app.use(express.static(path.join(__dirname, "public")));

//Definiuje obsługę żądania POST dla ścieżki "/submit".
//Pobiera dane z ciała żądania (req.body), które są dostępne dzięki middleware body-parser.
//Renderuje widok "results" i przeka zuje dane formularza jako obiekt formData.Definiuje obsługę żądania POST dla ścieżki "/submit".
//Pobiera dane z ciała żądania (req.body), które są dostępne dzięki middleware body-parser.
//Renderuje widok "results" i przekazuje dane formularza jako obiekt formData.
app.post("/submit", (req, res) => {
  const formData = req.body;
  res.render("results", { formData });
});

app.get("/", (req, res) => {
  res.render("form");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
