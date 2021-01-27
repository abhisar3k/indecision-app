//argument object -no longer bound with arrow function

const add = (a, b) => {
    return a + b;
};
console.log(add(2,3, 10));


//this keyword - no longer bound
//no longer user function word!

const user = {
    name: 'Abhisar',
    cities: ['Damanjodi', 'Rourkela', 'Sambalpur'],
    printPlacedLived() {     //ES6 method
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
    }
};
//console.log(user.printPlacedLived());

//Challenge area
const multiplier = {
    numbers: [10, 20, 30, 40, 50],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num + ' multiplied by ' + this.multiplyBy + ' is ' + num*this.multiplyBy);
    }
};
console.log(multiplier.multiply());