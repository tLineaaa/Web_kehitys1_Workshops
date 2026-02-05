// exercise 8
var x=5;
var y=6;
var z=x+y;
console.log(z);
alert(z);
document.write(z);


// exercise 9 Added lines 16, 19-22 & 25
var x=20;
var order='Beer';
console.log(x)
if (x>50){
    document.write("He's over 50!");
    console.log("He's over 50!");
} else if (x <= 50 && x>30){
    document.write("Middle aged man, who ordered some "+order);
    console.log("Middle aged man, who ordered some "+order);
} else if (x <= 30 && x > 18){
    document.write("You are barely adult, but ok.");
    console.log("You are barely adult, but ok.");
} else {
    document.write("It seems you're bit underaged.");
    console.log("It seems you're bit underaged.");
}

// exercise 10 Added lines 33 & 35
var arr =[];
for (var i=0; i<101; i++){
    arr.push(Math.random());
    console.log(arr);
    document.write(`<h1 style=color:red> ${arr} </h1>`);
}
console.log(arr);

// exercise 11 Added lines  41-47
function addNumbers(a, b) {
return a+b;
}
var answer = addNumbers(9, 10);

if (answer > 100) {
    alert("Over 100!");
}
document.write(`<p style=color:blue> ${answer} </p>`);
console.log(answer);

// exercise 12  Changed almost the whole code
var person = [
{ firstName:"John", lastName:"Doe", age:50, eyeColor:"blue", address:"Thisandthatroad 33", phone:"1234567",
printInfo: function() {
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor + " " + this.address + " " + this.phone;
}
},
{ firstName:"Jenny", lastName:"Daisy", age:45, eyeColor:"green", address:"Upthehill 3", phone:"987654",
printInfo: function() {
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor + " " + this.address + " " + this.phone;
}
},
{ firstName:"Seppo", lastName:"Taalasmaa", age:74, eyeColor:"light blue", address:"Salatut elämät 55", phone:"33101",
printInfo: function() {
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor + " " + this.address + " " + this.phone;
}
},
{ firstName:"Heikki", lastName:"Hanhi", age:16, eyeColor:"pink", address:"Animeland 1", phone:"666",
printInfo: function() {
    return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor + " " + this.address + " " + this.phone;
}
}
];

for (var human = 0; person.length; human++) {
    document.write(person[human].firstName + " " + person[human].lastName + "<br>");
}
console.log(person.age);