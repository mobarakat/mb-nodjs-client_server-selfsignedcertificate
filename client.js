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