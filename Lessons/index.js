//deva.one




// const x = 10;
// console.log(x);
// alert(x);

// console.log("index 1 js file");

// let firstName = "ani"
// console.log(firstName);

// import {students} from "./students.js"
// console.log(students);

import {CARS,CAR_MAX_SPEED} from './cars.js';
import {STUDENTS} from './students.js';

const safeCars = [];
const speedingCars = [];

for (let i = 0; i < CARS.length; i++) {
    if (CARS[i].speed >= CAR_MAX_SPEED) {
        speedingCars.push(CARS[i])
    } else {
        safeCars.push(CARS[i])
    }
}

