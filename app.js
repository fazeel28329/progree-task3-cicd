const http = require('http');

const PORT = process.env.PORT || 3000;

function getMessage() {
  return 'Progree Task 3 - CI/CD Pipeline Running!';
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(getMessage());
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { getMessage, server };
