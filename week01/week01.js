console.log("**The Age Calculator**");

var currentYear = 2017;
var birthYear = 1981;

var age = function (current, birth) {
  age = currentYear - birthYear;
  anotherPossibleAge = age +  1;
  return console.log("He is either " + age + " or " + anotherPossibleAge + "." );
};
age(currentYear,birthYear);

console.log("**The lifetime Supply Calculator**");

var currentAge = 35;
var maxAge = 70;
var perDay = 5;
var totalAmount = (maxAge-currentAge) * perDay;

console.log("You will need " + totalAmount + " snacks to last you until the ripe old age of " + maxAge);


console.log("**The Geometriaer**");

var radius = 10;
var pi = 3.141592;

var circumference = (2 * pi) * radius;
console.log("The circumference is " + circumference);

var area = pi * (Math.pow(radius, 2));
console.log("The area is " + area);

console.log("# The even/odd reporter");

for(var i = 0 ; i <= 20 ; i++){
  if (i % 2 == 0){
    console.log( i + " is Even");
  }else{
    console.log( i + " is Odd");
  }
};

console.log("# Multiplication Tables");

for (var i = 2 ; i <= 10 ; i++){
  console.log("\nMulitplication table of " + i);
  for(var j = 1; j <=10 ; j++){
    console.log(i + " X " + j + " = " + i * j );
  }
}

console.log("# The Vegan Test");

var menu = ['Steak', 'Fruit Salad', 'Tofurkey', 'Pork Chops'];

console.log("On the menu tonight: " + menu.join(", "));

var choice = prompt("Choose your menu");

var menuInfo = function(choice){
  if(choice === menu[2]){
    return console.log("This cuisine is vegan friendly.");
  }else{
    return console.log("Vegarns beware!");
  }
};

menuInfo(choice);
