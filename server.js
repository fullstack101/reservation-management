const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Reservation = require('./models/reservation');

mongoose.connect('mongodb://user:123456@ds129720.mlab.com:29720/reservations');
var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){console.log('DB connected')});

// get all reservations
app.get('/reservations', (req, res) => {
    Reservation.getReservations((err, reservations) => {
      if(err){
        throw err;
      }
      res.json(reservations);
    });
});

//get a single reservation by id
app.get('/reservations/:_id', (req, res) => {
	Reservation.getReservation(req.params._id, (err, reservation) => {
		if(err){
			throw err;
		}
		res.json(reservation);
	});
});

//add a new reservation
app.post('/reservations', (req, res) => {
    var reserv = req.body;
    Reservation.addReservation(reserv, (err, reserv) => {
        if(err){
            throw err;
        }
        res.json(reserv);
    });
});

//delete a reservation 
app.delete('/reservations/:_id', (req, res) => {
  var id = req.params._id;
  Reservation.deleteReservation(id, (err, reservation) => {
    if(err){
        throw err;
      }
      res.json(reservation);
    });
});

//edit a reservation
app.put('/reservations/:_id', (req, res) => {
	var x = req.params._id;
	var reserv = req.body;
	Reservation.updateReservation(x, reserv, {}, (err, reserv) => {
		if(err){
			throw err;
		}
		res.json(reserv);
	});
});

app.listen(8080);
