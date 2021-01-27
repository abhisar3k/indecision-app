var nameVar = 'Andrew';
console.log(nameVar);

let nameLet = 'Mike';
nameLet = 'ape'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Abhisar Ekka';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);