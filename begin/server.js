/**
 *
 * @author lonecloud
 * @date 2017/9/26
 * @version v1.0
 */
var http = require('http');



http.createServer(function(req,res){



    res.writeHead(200,{'Content-Type':'text/plain'});



    res.end('Hello World\n');



}).listen(8081,'127.0.0.1');



console.log('Server running at http://127.0.0.1:8081');