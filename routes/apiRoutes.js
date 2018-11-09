let reservations = require('../data/reservations.json');
let waitinglist = require('../data/waitinglist.json');
module.exports = function(app){
    //routes for.....
    //get tables - ???
    //get reservations - tables reserved
    //get waitinglist - waitlist
    //post for making reservations
    app.get('/api/reservations', (req, res)=>{
        res.json(reservations);
    });
    app.get('/api/waitinglist', (req, res)=>{
        res.json(waitinglist);
    });
    app.post('/api/reservations',(req,res)=>{
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