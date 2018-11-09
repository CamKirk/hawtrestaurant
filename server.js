let express = require('express');
let app = express();
let mysql = require('mysql');
let connection = mysql.createConnection(process.env.MSQLURL||3306);


//deal with post requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//routes
require('./routes/apiRoutes')(app,connection);
require('./routes/htmlRoutes')(app);

//start server
app.listen(3000,function(){
    console.log('server listening');
    
})