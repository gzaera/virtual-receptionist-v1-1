var express = require('express')
    , path =      require('path');


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