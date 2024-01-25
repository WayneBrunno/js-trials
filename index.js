//let is used to declare variables//
let person = {
    name: 'monte',
    zSign:'sagitarius',
    age:26
    
};
  // const sets a value to aconstant. cant be changed
const date= 54
console.log(date)

//you can change the properties in a variable using dot notation//
person.name='phoebe';
person.zSign='aries'
//console.log is used to displaymessage on the console
console.log(person.zSign);


//arays
let selectedColors =['red', 'blue','green','orange'];
console.log(selectedColors[2]);
//using bracket notation to change or access properties of an object
//let individualName = {
   // name: 'ndeti'
   // hisAge:26

//}
//console.log(individualName);
//individualName['hisAge']=23;

//functions
//with pararameters and arguements to erfome tasks
function greet(firstName, lastName)//firsName and lastName are parameters
{
console.log('hello '+ firstName+' '+lastName);
}
greet('john', 'kiriamiti');//john is arguement 1 kiriamiti is argument 2
greet('mary','wambugu');
//to calculate
function square(a, b){
    return a*b;
}
console.log(square(16,3));

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!