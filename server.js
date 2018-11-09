let express = require('express');
let app = express();

//deal with post requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//start server
app.listen(3000,function(){
    console.log('server listening');
    
})