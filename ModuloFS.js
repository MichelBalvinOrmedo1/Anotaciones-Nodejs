//Modulo FS
//Modulo que contiene funcionalidad muy util
//para trabajar con el sistema de archivos

/* Operaciones utiles 

    -Leer
    -Modificar
    -Copiar                  ARCHIVOS
    -Eliminar 
    -Cambiar de nombre 


    Todos os métodos de este modulo son asyncronos por defecto

    Pero puedes escoger versiones sincronas de estos metodos agregando "Sync" a sus nombres
    ejemplo
    fs.rename()
    fs.renameSync();
*/

const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");

// copiar el archivo
fs.readFile('html/ReadFile.html','utf-8',(err,contenido) =>{
    if(err){
        console.log(err);
    } 
    else {
        console.log(contenido);
    }
});

//Cambia el nombre del archivo
fs.rename('html/ReadFile.html','html/ReadFile01.html', (err)=>{
    if(err){
        throw err; // tira el error si existe
    }
    console.log("Nombre Cambiado perfectamente");
})

// Agrega contenido al final del archivo

fs.appendFile('html/ReadFile.html','<p>hola<p>',(err) =>{
    
    if(err){
        throw err;
    }
    console.log("Archivo Actualizado")
})

//Reemplazar todo el contenido del archivo

fs.writeFile('html/ReadFile.html','Contenido Nuevo', (err) => {

    if(err){
        throw err;
    }
    console.log("Contenido remplazado exitosa vente")
})

//Elimar un archivo
fs.unlink('html/main.html',(err) =>{
    if(err){
        throw err;
    }
    console.log("Archivo eliminado");
})