// using objects

let bike = {
    make: 'Yamaha',
    color: 'Blue',
    wheels: 2,
    sound: function() {
        console.log("vrooom");
    }
}

// constructor functions

// step 1: define the function
function Motorbike(name, color) {
    this.name = name;
    this.color = color;
}

// step 2: call the function
let myBike = new Motorbike('Yamaha', 'Black');

// JS's inbuilt object constructor
let person = new Object({'name':'Wally', 'age':35});
