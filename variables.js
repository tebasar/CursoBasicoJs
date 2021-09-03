var nombre = "Oscar";

//declarar variable
var edad;

//inicializar
edad=30

//arreil
var elementos = ["compu", "celu"];

var persona = {
    nombre: "diego",
    edad: 30
}
//los 8 tipos de datos de JS
// Boolean
// Null
// Undefined
// Number
// BigInt
// String
// Symbol


//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
