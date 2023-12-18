const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/form") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body>");
    res.write("<h2>Task 2 (without Express)</h2>");
    res.write('<form action="/result">');
    res.write('<label for="param">Enter the parameter: </label>');
    res.write('<input type="text" name="value" required>');
    res.write('<input type="submit" value="Send">');
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  } else {
    let parameter = parsedUrl.query;

    fs.writeFile("file.txt", parameter.value, (err) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
      } else {
        res.writeHead(302, { Location: "/form" });
        res.end();
      }
    });
  }
});

server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
