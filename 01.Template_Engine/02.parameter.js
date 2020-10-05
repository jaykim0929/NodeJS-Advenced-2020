const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

//서버를 생성하고 실행 합니다.
http.createServer(function(request, response) {
    // ejsPage.ejs 파일을 읽습니다.
    fs.readFile('02.ejsPage.ejs', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.end(ejs.render(data, {
            name: 'RinIanTta',
            description: 'hello ejs with Nodejs ...'
        }));
    });
}).listen(4000, function() {
    console.log('Server Running at http://127.0.0.1:4000');
});