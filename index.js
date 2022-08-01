let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer((req, res) => {
    let pageData = url.parse(req.url, true);
    if (pageData.pathname == '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
            res.write(data);
            return res.end();
        });
    } else if (pageData.pathname == '/about') {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
            res.write(data);
            return res.end();
        });
    } else if (pageData.pathname == '/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
            return res.end('404. Not Found');
        });
    }
}).listen(8080);