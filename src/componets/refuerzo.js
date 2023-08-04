// // //condicional con operador terciario

let salario = 10000;

// // //decision tradicional

// // if (salario > 0) {
// //   console.log("tiene saldo en la cuenta");
// // } else {
// //   console.log("no tiene saldo en la cuenta");
// }

salario > 0
  ? console.log("tiene saldo en la cuenta")
  : console.log("no tiene saldo en la cuenta");

//recorriendo arreglos
let numero = [1, 3, 5];
//devuelve los valores
numero.forEach((numero) => {
  console.log(numero * 4);
});

//recorriendo matriz
let matriz = [
  ["cali", "medellin", "bogota"],
  ["cali", "medellin", "bogota"],
  ["cali", "medellin", "bogota"],
];

//operador map:devuelve otro arreglo con la posiciones originaless
//usar este bucle en react me permite obtener index
let nuevoArreglo = numero.map((numero) => {
  return numero * 4;
});

console.log(numero);
console.log(nuevoArreglo);
