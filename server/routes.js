var express = require('express')
    , path =      require('path');
//var router = express.Router();
/*

router.get('/', function(req, res, next) {

	res.sendFile(path.resolve(__dirname+'/../client/views/index.html'));
});

//module.exports = router;
*/
///////////////////
// http://stackoverflow.com/questions/13860899/angular-and-express-routing

/* GET home page. */
/* 
module.exports = function(app){

app.get('/', function(req, res){
	
  res.sendFile(path.resolve(__dirname+'/../client/views/index.html'));
});

app.get('/done', function(req, res){

  res.sendFile(path.resolve(__dirname+'/../client/views/done.html'));
});

}
*/

exports.partials = function(req, res){
  var filename = req.params.filename;
  if(!filename) {
  		res.sendFile(path.resolve(__dirname+'/../client/views/index.html'));
  }  
  else //res.render("partials/" + filename );
  		res.sendFile(path.resolve(__dirname+'/../client/views/partials/'+ filename));
};

exports.index = function(req, res){
  res.sendFile(path.resolve(__dirname+'/../client/views/index.html'));
  //res.render('index', {message:"Hello!!!"});
};