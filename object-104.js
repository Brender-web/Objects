//object methods-refers to aproperty of object which the value of fuction
//the this. keyword refers to an object.
let restaurant ={
    name: 'Gaucho',
    guestCapacity: 75,
    guestcount:0,
    checkAvailability: function (partSize){
        let seatsleft = this.guestCapacity - this.guestcount;
        return partSize <= seatsleft;
    },
    seatParty: function (partSize){
this.guestcount= this.guestcount + partSize;
    },
    removeParty: function (partSize){
        this.guestcount= this.guestcount-partSize;
}

};

restaurant.seatParty(74);
console.log(restaurant.checkAvailability(3));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(7));







