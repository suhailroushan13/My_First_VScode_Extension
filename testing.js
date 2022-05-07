import http from "http";

const httpPort = 7070;

let httpServer = http.createServer((req, res) => {
  res.end(`
  <h1>VS Code Extension Testing  </h1>
   
    `);
});

httpServer.listen(httpPort, () => {
  console.log(`SERVER STARTED AT `, httpPort);
});
