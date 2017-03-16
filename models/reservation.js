var mongoose = require('mongoose');

// Schema for the mongoose db

var reservation_Schema = mongoose.Schema({
    name:{
    type: String,
        required: true
    },
    st_id:{
        type: Number,
        required: true
    },
    room:{
        type: String,
        required: true
    },
    timeslot:{
        type: String,
        required: true
    },
    details:{
        type: String
    }
});

const Reservation = module.exports = mongoose.model('Reservation', reservation_Schema);

//get reservations 
module.exports.getReservations = (callback, limit) => {
    Reservation.find(callback).limit(limit);
};

//get a single reservation
module.exports.getReservation = (id, callback) => {
    Reservation.findById(id);
}

//add a reservation 
module.exports.addReservation = (reservation, callback) => {
    Reservation.create(reservation, callback);
};

//delete a reservation
module.exports.deleteReservation = (id, callback) => {
    var query = {_id: id};
    Reservation.remove(query, callback);
};

//update
module.exports.updateReservation = (id, reservation, options, callback) => {
    var query = {_id: id};
    var update = {
        name: reservation.name,
		st_id: reservation.st_id,
        room: reservation.room,
        timeslot: reservation.timeslot,
        details: reservation.details
    }
    Reservation.findOneAndUpdate(query, update, options, callback);
}
