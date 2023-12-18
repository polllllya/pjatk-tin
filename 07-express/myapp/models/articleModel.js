const fs = require("fs");
const path = require("path");

//Określenie ścieżki do pliku z danymi artykułów
const dataFilePath = path.join(__dirname, "../data/articles.json");

//do odczytu i zapisu danych
class Article {
  static getAll() {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    //Konwertuje odczytane dane z formatu JSON na obiekt JavaScript
    return JSON.parse(data);
  }

  static add(article) {
    const allArticles = this.getAll();
    allArticles.push(article);
    fs.writeFileSync(dataFilePath, JSON.stringify(allArticles, null, 2));
  }
}

//Pozwala na dostęp do klasy Article
module.exports = Article;
