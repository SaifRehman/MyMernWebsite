var express  = require('express')
var router = express.Router()
var mysql = require('mysql');
router.get('/get',function(req,res,next)
{
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port: 8889
  });
  connection.connect(function(err) {
    if (err) {
      console.log("error");
      return;
    }
    console.log('sucess');
  });
  connection.query('SELECT * FROM mern.sample',function(err,rows){
  if(err)
  {
    console.log("error");
  }
  else {
      console.log("sucessfull query");
      console.log('Data received from Db:\n');
      console.log(rows);
      res.json({
        resource: rows
      })
  }
});
})
module.exports = router
