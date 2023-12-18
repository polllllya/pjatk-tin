const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/form") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body>");
    res.write("<h2>Task 1 (without Express)</h2>");
    // form action=result
    res.write('<form action="/result">');
    res.write('<label for="param">Enter the parameter: </label>');
    res.write('<input type="text" name="x" required>');
    //type=submit
    res.write('<input type="submit" value="Send">');
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  } else if (parsedUrl.pathname === "/result") {
    let parameter = parsedUrl.query;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body>");
    res.write("<h2>Result:</h2>");
    res.write(`<p>${parameter.x}</p>`);
    res.write("</body></html>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<html><body>");
    res.write("</h2>404 Not Found</h2>");
    res.write("</body></html>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
