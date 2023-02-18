//Temporisador
//Contiene funciones que ejecutan código luego de un cierto "periodico de tiempo"
//Funciones utiles setTimeout, setImmediate, setInterval

//setTimeout
// Para Ejecutar código luego de un número especifico de milisegundos.
//setTimeout(funcion, retraso, argumento, argumento2)
/*
function mostraTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);

}
setTimeout(mostraTema,1000,'Node.js')

function suma(a,b){
    console.log(a+b);
}
setTimeout(suma,1000,6,4)
*/
//SetImmediate(
    //Para ejecutar codigo asincrono en la proxima iteraccion del ciclo de eventos(Lo más pronto posible)
    //setImmediate(funcion,argumento,argumento2)
//
function mostraTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
console.log("antes de setImmediate()")
setImmediate(mostraTema,'node.js');
console.log("Despues de set Immediate()");