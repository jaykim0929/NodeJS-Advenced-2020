//모듈을 추출합니다.
const http = require('http');
const jade = require('jade');
const fs = require('fs');

//서버를 생성하고 실행합니다.
http.createServer(function(request, response) {
    //03.jade파일을 읽습니다
    fs.readFile('03.jade', 'utf8', function(error, data) {
        //jade 모듈을 사용합니다.
        var fn = jade.compile(data);

        //출력합니다.
        response.writeHead(200, { 'Content-Type' : 'text/html'});
        response.end(fn());
    });
}).listen(4000, function() {
    console.log('Server Running at http://127.0.0.1:4000');
});