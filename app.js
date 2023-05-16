const process = require('process');

const calculadora = require('./calculadora')

const resto = require('./resto') //aaaaaaaaaaaaaaaaaaaaaaaaa

const operaciones =['sumar','restar','multiplicar','dividir','resto']
 
const operation = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;


if(operaciones.includes(operation)){

 if(operation === "sumar"){
    resultado = calculadora.sumar(numeroA,numeroB)
 } else if(operation === "restar"){
    resultado = calculadora.restar(numeroA,numeroB)
 }  else if(operation === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA,numeroB)
 } else if(operation === "dividir"){
    resultado = calculadora.dividir(numeroA,numeroB)
 } else if(operation === "resto"){ //Aaaaaaaaaaaaaaaaaaaaaaaaa
   resultado = resto.resto(numeroA,numeroB)
}
   
 console.log(resultado);

}

 else {
    console.log("La operacion no existe");
}
