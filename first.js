var http=require('http') //calling http
http.createServer(function(req,res){
    res.write('helllloooo')
    res.end()
}).listen(8000)  //telling server to listen to port number 8000