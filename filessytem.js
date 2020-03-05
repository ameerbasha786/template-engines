var http=require('http'),
fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    var readstream=fs.createReadStream(__dirname+"/readtext.html")
    readstream.pipe(res)   
}).listen(3000)