
let reservations = require('../data/reservations.json');
let waitinglist = require('../data/waitinglist.json');
module.exports = function(app,connection){
    //routes for.....
    //get tables - ???
    //get reservations - tables reserved
    //get waitinglist - waitlist
    //post for making reservations
    app.get('/api/tables', (req, res)=>{
        console.log('hi this is the tables get route');

        connection.connect(`SELECT names, id, phone FROM reservations WHERE seated = TRUE`,
        (err,rows)=>{
            console.log(rows);
            res.json(rows);
        });

        let redaction = reservations.map((data)=>{
            return({
                name: data.name,
                ID: data.ID
            });
        });

        res.json(redaction);
    });
    app.get('/api/waitlist', (req, res)=>{
        res.json(waitinglist);
    });
    app.post('/api/tables',(req,res)=>{
        let reservationNumber = reservations.length;
        let customer = req.body;

        if (reservationNumber < 5){
            reservations.push(customer);
        }
        else{
            waitinglist.push(customer); 
        }

        
        res.json({reservations: reservations.length});

    })
}