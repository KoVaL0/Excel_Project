var d1 = new Date();
var number1 = 10;
var number2 = 10;
if ( number1 < number2 ) {
    alert(number1 + " < " + number2 ); 
}
else if (number1 > number2) {
    alert(number1 + " > " + number2 ); 
}
else {

};

function iterator(i) {
    for (; i<=10; i++){
        document.write(i + "<br />");
    }
};

function prompt_new() {
    var arg = prompt("Please enter");
    return arg
};

function alert_new(arg) {
    alert("Information: " + arg)
};


var Student = {
name: "Alex", 
course: "4",
age: "21"
};
document.write(Student.name, "</br>");

function student(name,age,course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.changename = function (name) {
        this.name = name;
    }
};

var p1 = new student("Sanek", 21, 3);

document.write(p1.name);

alert_new(p1.name);
p1.changename(prompt_new())
alert_new(p1.name);

var courses = ["HTML","CSS", "JS"];
var d2 = new Date();
alert_new(Math.abs(d1-d2))

function printTime(){
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds(FormData);
    document.body.innerHTML ="Time " + hours + ":" + mins + ":" + secs
};

setInterval(printTime, 1000);
console.dir(printTime);

let counter = 0

setInterval(function() {
    console.log(++counter)
}, 1000)