const mysql = require('mssql');
const express = require('express'),
      app = express();

app.use(express.static(__dirname));      
// Create database connection
  const db = {   
        user: "balraj",
        password: "12345",
        server: "localhost",
        database: "wf_retail"      
 };
//GET request from salesFactory 
 app.get('/salesData', function(req, res){
      new mysql.ConnectionPool(db).connect().then(pool => {
          return pool.request().query("select * from simple_sales_view");
        }).then(result => {
          console.log("Connection Successful!");
          let rows = result.recordsets;
          res.setHeader('Access-Control-Allow-Origin', '*');
          console.log("Receiving data....");
          res.status(200).json(rows[0]);
          mysql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}"});
          console.log("No Data found. Please check your database server");
          mysql.close();
        })
  });

//local server listening for requests on port 3000  
app.listen('3000', () => {
    console.log('Server started on port 3000');
});