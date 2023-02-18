function saludar(nombre){
    return `Hola ${nombre}`;
}
function holamundo(){
    return "Hola mudo"
}
//sirven para exportar
//individual
module.exports.saludar = saludar;
module.exports.holamundo = holamundo;

//Con mas objetos
module.exports = {
    saludar: saludar,
    holamundo: holamundo
}