// 导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

// 创建服务器
const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');
  if (req.url == '/') {
    fs.readFile(path.join(__dirname, 'www','index.html'), (err, data) => {
        if (err) {
            throw err;
        } else {
            res.end(data);
        }
    });
  } else if (req.url.indexOf('/resource') == 0 ) {
    fs.readFile(path.join(__dirname, 'www',req.url), (err, data) => {
        if (err) {
            throw err;
        } else {
            res.end(data);
        }
    });
  }
});

// 开启服务器 port :端口号  hostname :主机名 ip地址 (默认是本机ip,可以不写) 
server.listen(port, () => {
  console.log(`Server running ...`);
});