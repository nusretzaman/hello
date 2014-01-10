var express=require("express")
    ,messanger=require("./hello")
    ,collaborationManager=require("./Manager/CollaborationMatrixManager");
var app=express();
var port=process.env.PORT||5000;
app.use(express.logger());

app.get("/",function(req,res){
    res.send("Greetings from Nusret");
});

app.get("/insertMatrixData",collaborationManager.InsertUserMatriix);
app.get("/chat",messanger.chat);

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
});

app.use(errorHandler);

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

function errorHandler(err, req, res, next) {
    if (req.xhr) {
        res.send(500, { error: 'Something blew up!' });
    } else {
        console.log(" ################From errorHandler") ;
        res.render('error', { error: err });
        next(err);
    }
}


app.listen(port,function(){
    console.log("listening on port"+ port);
});
