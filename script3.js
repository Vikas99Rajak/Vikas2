var name= window.prompt("What is your name ?")
document.write("Hey "+ name + ", How are you?")
function sayHi(){
  document.write("<h4>Hello User</h4>");
}
sayHi();
function sayVikas(name){
  document.write("<h2>Welcome "+ name + "<h2>");
}
sayVikas("Vikas");
document.write("<p>When ever a parameter is passed in function defination the value should be provided in function calling or else it will display undifined as result</p>")
function Vikas(name){
  document.write("<p>Welcome "+ name + "</p>");
}
Vikas("Vikas");
Vikas("Avinash");
Vikas("Dishu");
Vikas("Mike");
function Dishu(name, age){
  document.write("Hey "+ name + " You are "+ age + " years old...!!");
}
Dishu("Dishu", 5);
function addition(a,b){
  a+b;
}
document.write(addition(4,5));
document.write("; We need to return the value to display the result; ")
function add(a,b){
  return a+b;
}
document.write(add(4,5));
document.write("; Hii; ")
function summation(a,b){
  return a+b;
}
var addnum= summation(4,10);
document.write(addnum);
var head =document.getElementById("header")
head.innerHTML="Overridden"
var lin =document.getElementById("link")
lin.href="https://amazon.com";
function handelclick(element){
  element.innerHTML= "CLICKED;"
  element.style="background-color: lightgreen;"
}
