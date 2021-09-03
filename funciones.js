// declarativas

function miFuncion() {
    return 3;
}

miFuncion();

//expresion

var miFuncion = function(a,b){
    return a + b
}

miFuncion();

function test(a,b){
    var resultado = a+b;
    return resultado;
}

test (1,2);

//Scope local puede acceder a scope global
// scope global NO puede acceder al local