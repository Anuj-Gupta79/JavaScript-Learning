const http = require('http');

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const num = Number(url.searchParams.get('n'));
  if (isNaN(num)) {
    res.statusCode = 400;
    res.end('Invalid input');
  } else {
    const result = factorial(num);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The factorial of ${num} is ${result}`);
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
