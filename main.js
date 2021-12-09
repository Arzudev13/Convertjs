// function addObj(name, age, gender,  email){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
// }

// let arzu = new addObj("Arzu", 16, "female", "arzu@gmail.com");
// let artur = new  addObj("Artur", 18, "male", "artur@gmail.com" );
// let adelya =  new addObj("Adelya", 16, "female", "adelya@gmail.com");
// let aigerim = new addObj("Aigerim", 22, "female", "aigerim.gmail.com");
// let ikbol = new addObj("Ikbol", 16, "male", "ikbol@gmail.com");

// console.log(arzu, artur, adelya, aigerim, ikbol);



function addPerson(name, year, male, gmail) {
    this.name = name;
    this.gmail = gmail;
    this.male = male;
    let _year = year;
    this.getYear = function()  {
        return _year;
    }
    this.setYear = function(year) {
        if ( typeof year === "number"  && year > 0 && year < 100) {
            _year = year;

        } else {
        console.log("error") 
        }
    }
}

// typeof = number, year < 110, year > 0
// error


let tima = new addPerson("tima", 21, "male", "tima@gmail.com")

console.log(tima);
console.log(tima.getYear());

tima.setYear(20);
tima.setYear(-2);

// set menyat
// get daet


// let a; меняется


// const b; не меняется


let arzu = Object.create({}, {
    year :{
        value: 20,
        enumerable: true,
        writable: true,
        // enumerable vidimost
    }, 
    name: {
        value: "tima",
        enumerable: true,
        writable: false,
    },
}
);

arzu.year = 100;
arzu.name = "eatraworkw"
console.log(arzu);




