const http = require("http");
const url = require("url");
const qs = require("querystring");

// Obsługa żądania
const handleRequest = (req, res) => {
  // Parsowanie URL
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/") {
    // Strona główna z formularzem
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body>");
    res.write("<h2>Prosta Aplikacja Bez Express</h2>");
    res.write('<form action="/result" method="post">');
    res.write('<label for="param">Wprowadź parametr:</label>');
    res.write('<input type="text" name="param" id="param" required>');
    res.write('<input type="submit" value="Wyślij">');
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  } else if (parsedUrl.pathname === "/result" && req.method === "POST") {
    // Obsługa przesłanego formularza
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = qs.parse(body);

      // Strona wynikowa z wyświetloną wartością parametru
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html><body>");
      res.write("<h2>Wynik:</h2>");
      res.write(`<p>Przesłany parametr: ${formData.param}</p>`);
      res.write("</body></html>");
      res.end();
    });
  } else {
    // Obsługa nieznanych ścieżek
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }
};

// Utworzenie serwera HTTP nasłuchującego na porcie 3000
const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log("Serwer nasłuchuje na porcie 3000");
});
