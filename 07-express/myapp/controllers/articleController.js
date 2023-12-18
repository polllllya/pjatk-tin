const express = require("express");
//Ta trasa obsługuje różne żądania HTTP związane z encją artykułu w Twojej aplikacji
const router = express.Router();

//Ta funkcja przyjmuje jako argument klasę Article (zdefiniowaną wcześniej), co pozwala na korzystanie z metod tej klasy w obszarze definicji tras.
module.exports = (Article) => {
  router.get("/", (req, res) => {
    const articles = Article.getAll();
    //: Renderuje widok article/index.ejs i przekazuje do niego dane w postaci obiektu
    res.render("article/index", { articles });
  });

  router.get("/add", (req, res) => {
    res.render("article/add");
  });

  router.post("/add", (req, res) => {
    //Pobiera dane z formularza przesłane przez klienta.
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
    };

    Article.add(newArticle);
    res.redirect("/articles");
  });

  router.get("/:id", (req, res) => {
    const articles = Article.getAll();
    //Pobiera wartość parametru id z adresu URL.
    const article = articles[req.params.id];
    res.render("article/details", { article });
  });

  //eksportowany jest obiekt routera, aby mógł być używany w głównym pliku aplikacji Express.
  return router;
};
