//创建HTTP服务器

//1. 加载http模块
var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

//2.创建http 服务器
//参数：请求的回调，当有人访问服务器的时候就会自动调用回调函数
var server = http.createServer(function(request,response){
  var pathname = url.parse(request.url).pathname
  var realPath = "view" + pathname
  console.log('有人访问了服务器')
  console.log(path)
  // 判断
  path.exists(realPath, function (exists) {
    if (!exists) {
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        response.write("This request URL " + pathname + " was not found on this server.");
        response.end();
    } else {
        fs.readFile(realPath, "binary", function (err, file) {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                response.end(err);
            } else {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                response.write(file, "binary");

                response.end();
            }
        });
    }
});
  // //回调函数 设置响应体response
  // var fileContent = fs.readFileSync(__dirname + '/index.html')
  // response.write(fileContent)
  // response.end()
})

//让服务器监听8088端口
server.listen(8088)
console.log('打开 localhost:8088')