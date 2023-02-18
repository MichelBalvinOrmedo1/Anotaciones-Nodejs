const saludos =require("./exportar.js");
//console.log(saludos.saludar("Freebootcamp"));
//console.log(saludos.holamundo());

//tambien
const {holamundo, saludar} = require('./exportar.js');
console.log(holamundo())
console.log(saludar("Michel"))



