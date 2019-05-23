var fs = require('fs'); 
var https = require('https'); 

var options = { 
    key: fs.readFileSync('server-key.pem'), 
    cert: fs.readFileSync('server-crt.pem'), 
    ca: fs.readFileSync('cert-authority-crt.pem'), 
    strictSSL: true,
    requestCert: true, 
    rejectUnauthorized: true
}; 
var srv = https.createServer(options, function (req, res) { 
    console.log('Recieve an request from authorized client!'); 
    res.writeHead(200); 
    res.end("Hello secured world!"); 
}).listen(3000, function() {
     console.log('Hello! I am at https://localhost:'+ srv.address().port);
});