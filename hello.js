var PORT = process.env.PORT||9000;
var ejs = require('ejs'), path = require('path');
var io = require('socket.io').listen(PORT);

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

exports.chat= function (request, response) {
    ejs.renderFile(__dirname + '/views/chatWindow.ejs',
        {title :'test', names : 'names'},
        function(err, result) {
            if (!err) {
                response.end(result);
            }
            else {
                console.log(err);
                response.end('An error occurred');
            }
        });
};

console.log("Server on port %s", PORT);
