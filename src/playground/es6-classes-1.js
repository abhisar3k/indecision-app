class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);  //it calls the parent constructor
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {     //this overrides the parent function
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`; 
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name,age,location) {
        super(name,age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getDescription();

        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.location}`;
        }

        return greeting;
    }
}

const me = new Traveller('Abhisar Ekka', 22, 'Damanjodi');
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());