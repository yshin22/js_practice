/*Backtick: allow embedding variables and expressions

let name = "John";

alert(`hello ${name}!`);


// Undefined: unsigned variable
let age;

alert(age);

// Returns type of value

typeof 10n;

typeof "string";


// Prompt: question to visitor. May provide default answer. ESC or blank prompt returns null. 

let result = prompt("how old are you?", 23);

alert(`you are ${result} years old`);


// confirm: modal window with two buttons that returns "true" for "ok" and "false" otherwise

let isBoss = confirm("you a boss man?")

alert(isBoss)

alert(`the type of "name" is ${typeof "name"}`);

// Number conversion

let year = "2022"

alert(`type of year ${typeof(year)}`)

let num = Number(year);

alert(`type of num ${typeof(num)}`)

// Comma evaluation: evaluates each section separated by comma, only returns last expression
let a = (1 + 2, 2 + 3);

alert(a)

alert("" + 1 + 0);
alert("" - 1 + 0);
alert("apple" > "pineapple");
alert(Number(""));

// if else operators
let firstPres = prompt("Who was the first president of the USA?")
if (firstPres == "George Washington") {
    alert("you are a genius");
}
else {
    alert("know your history")
}

// "?" conditional operator
let bookDate = prompt("are you booking for June 24th?")
let bookin = (bookDate == "yes") ? true : false;
alert(bookin)

// Object: key, value store
let user = {
    name: "John",
    age: "23",
}

user["company name"] = "Google"

let key = prompt("what do you want to know about the user?", "name");

alert(user[key]);



let fruit = prompt("what fruit u want?", "peach")

let basket = {
    [fruit]: 5
}

alert(`${basket["peach"]} peaches are in your basket`);

function makeUser(name, age) {
    return {
        name,
        age,
    }
}

let user = makeUser("Bapteest", 23);


alert(user.name)
alert(user.age)

// check if property exists
alert("name" in user)

// for loop that evaluates all keys and values
for (let key in user) {
    alert(key)
    alert(user[key])
}

// Evaluate properties in creation order
let countries = {
    "+20": "Brazil",
    "+19": "USA",
    "+15": "Paraguay",
    "+45": "Argentina",
}

for (let cont in countries) {
    alert(cont);
}

// Object reference and Copying
let a = {
    name: 'John',
    age: 23,
    height: '5ft3in'
}
let b = a

b.name = "Peppa pig"


alert(a == b)

alert(a.name)*/

function loadScript(src) {
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}



