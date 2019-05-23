# mb-nodjs-client_server-selfsignedcertificate
Create Client and Server to handshaking self-signed certificate using Nodejs 

## Description

After creating certificates [here](https://github.com/mobarakat/mb-create-selfsignedcertificate). It is time to test using nodejs.


# Server

```
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
```


# Client

```
var fs = require('fs'); 
var https = require('https'); 
var options = { 
    hostname: 'localhost', 
    port: 3000, 
    path: '/', 
    method: 'GET', 
    key: fs.readFileSync(__dirname +'/client-key.pem'), 
    cert: fs.readFileSync(__dirname +'/client-crt.pem'), 
    ca: fs.readFileSync(__dirname +'/cert-authority-crt.pem') }; 
var req = https.request(options, function(res) { 
    res.on('data', function(data) { 
        process.stdout.write(data); 
    }); 
}); 
req.end(); 
req.on('error', function(e) { 
    console.error(e); 
});
```
