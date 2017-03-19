console.log("#The Board");


var row = 20;
var symbol = [];

for (var i = 1 ; i <= row ; i++){
  symbol.push("#");
}

for(var i = 1 ; i <= row/2 ; i++){
  if(i % 2 === 0){
    console.log(symbol.join(" "));
  }else{
    console.log(" " + symbol.join(" "));
  }
};
