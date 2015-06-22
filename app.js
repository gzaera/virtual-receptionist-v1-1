var express =           require('express')
    , http =            require('http')
    , path =            require('path')
    , morgan =          require('morgan')
    , bodyParser =      require('body-parser')
    , methodOverride =  require('method-override')
    , routes =			require('./server/routes.js');

var app = module.exports = express();

app.set('views', __dirname + '/client/views');
//app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'client')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/partials/:filename', routes.partials);
app.use(routes.index);



