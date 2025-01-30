class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    matchAges(user2) {
        if (this.age < user2.age) {
            console.log(this.firstName + " è più giovane di " + user2.firstName);
        } else if (this.age > user2.age) {
            console.log(user2.firstName + " è più giovane di " + this.firstName);
        } else {
            console.log(this.firstName + " e " + user2.firstName + " hanno la stessa età");
        }
    }
}

let x = new User("Marco", "Zagaria", 29, "Milano");
let y = new User("Francesco", "Zagaria", 24, "Milano");
y.matchAges(x);

class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    sameOwner(pet2){
        if(this.ownerName === pet2.ownerName){
            console.log(this.petName + " ha lo stesso proprietario di " + pet2.petName);
        } else {
            console.log(this.petName + " ha un proprietario diverso di " + pet2.petName);
        }
    }
}
let petsArray =[];


const submitForm = (event) => {
    event.preventDefault();
    let pet = createPet();
    petsArray.push(pet);
    console.log(petsArray);
    if (petsArray.length > 1) {
        petsArray[0].sameOwner(petsArray[1]);
    }
}
const createPet = () => {
    let petName = document.getElementById("animalsName").value;
    let ownerName = document.getElementById("ownnerName").value;
    let species = document.getElementById("specie").value;
    let breed = document.getElementById("razza").value;
    let newPet = new Pet(petName, ownerName, species, breed);
    return newPet;
}
document.querySelector("form").addEventListener("submit", submitForm);