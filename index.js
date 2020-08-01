

// Shallow Copy and Deep Copy 
const a = { name: 'BMW', parts: { d: 10, e: 20 } };
b = { ...a };
b.name = 'Jaguar';
b.parts.d = 20;
console.log(b.parts.d);
console.log(a.parts.d);

const a = { name: 'BMW', parts: { d: 10, e: 20 } };
b = { ...a };
b.name = 'Jaguar';

let b = { parts: { ...a.parts } }
let b = { ...a, parts: { ...a.parts } }
b.parts.d = 20;
console.log(b.parts.d);
console.log(a.parts.d);
console.log(a);
console.log(b);
// shallow copy 
// refrence assignment
// deep copy

const array = [1, 5, 6];
const sortedArray = array.sort();
for (var i = 0; i < sortedArray; i++)
  console.log(sortedArray)


const person = { name: "shazia", age: "23" };
const copiedPerson = { ...person };
console.log(person);
console.log(copiedPerson);
// copiedPerson = person;
person = copiedPerson;
// person.name = "ali"
copiedPerson.name = "ali"
console.log(person);
console.log(copiedPerson);

// shallow copy and deep copy with spread operators with arrays and objects
const person = { name: "shazia", age: "23" };
// Deep copy
const copiedPerson = { ...person }; //will not effect copied Array
person.name = "najar"
console.log(person);
console.log(copiedPerson);
person = copiedPerson;
// shallow copy
person.name = "ali"
console.log(person);
console.log(copiedPerson);

const person = { name: "shazia", age: "23", hobbies: { one: "playing", two: "reading" } };
// deep copy for name property and shallow copy for hobbies
const copiedPerson = { ...person };
console.log(person);
console.log(copiedPerson);
// again deep copy for name and shallow copy for hobbies
person.name = "najar";
person.hobbies.one = "travelling";
console.log(person);
console.log(copiedPerson);

// creating Deep copy for hobbies also
const copiedPerson = { ...person, hobbies: { ...person.hobbies } };
person.hobbies.one = "surfing";
copiedPerson.hobbies.one = "playing";
console.log(person);
console.log(copiedPerson);

// deep copy using parsing and stringify
const dataStore = { name: "urmella", dairy: { write: "secrets", schedule: "timeTable" } };
const copiedDataStore = JSON.parse(JSON.stringify(dataStore));
console.log(dataStore);
console.log(copiedDataStore);
dataStore.dairy.write = "code";
console.log(dataStore);
console.log(copiedDataStore);

// concept of var inside the function
var a = 10;

function func1() {
  console.log(a); // undefined because hoisting concept;
  var a = "hello world";
  //  console.log(a);
}

func1();
console.log(a); // 10



const shape = {
  radius: 10.4,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter());
console.log(shape.perimeter());



function foo() {
    for(let i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(i);
        }, 0);
    }
}
foo();


var a = 10;

function func1() {
    console.log(a); 
    var a = "hello world";
}
console.log("frist Statement",a);
func1();
console.log("second Statemet",a);