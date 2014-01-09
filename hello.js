/*var PORT = 9000;
var express = require("express");
var ejs = require('ejs'), path = require('path');

var app = express();

var io = require('socket.io').listen(app.listen(PORT));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

app.get("/", function (request, response) {
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
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
});
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

//app.get('/', routes.index);

console.log("Server on port %s", PORT);
    */

var express=require("express");
var app=express();
var port=process.env.PORT||5000;
app.use(express.logger());

app.get("/",function(req,res){
    resp.send("hello");
});

app.listen(port,function(){
    console.log("listening on port"+ port);
});
