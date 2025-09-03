// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const lineas = +prompt("Ingresa el numero deseado:   ");
const especifico = +prompt("Si deseas una secuencia presiona 1 si deseas solo el numero deseado presiona 2:   ");


      //console.log(lineas);
      //console.log(especifico);
if(especifico === 1){
  for (let i = 1; i <= lineas; i++) {
    if (i % 3 ===0 &&  i % 5 ===0 &&  i % 7 ===0){
      console.log("FizzBuzzWoof");
    }
    else if(i % 3 ===0){console.log("Fizz");}
    else if(i % 5 ===0){console.log("Buzz");}
    else if(i % 7 ===0){console.log("Woof");
    }
    else{console.log(i);}
  };
}else if(especifico === 2){
  if (lineas % 3 ===0 &&  lineas % 5 ===0 &&  lineas % 7 ===0){
      console.log("FizzBuzzWoof");
    }
    else if(lineas % 3 ===0){console.log("Fizz");}
    else if(lineas % 5 ===0){console.log("Buzz");}
    else if(lineas % 7 ===0){console.log("Woof");
    }
    else{console.log(lineas);}
}
else{console.log("Opcion no valida.");}