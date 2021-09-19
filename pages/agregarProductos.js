'use strict'
let producto = [];

class datosProducto {
    constructor (idProducto, idNombreP, idPrecio, idCantidad,idFecha,idObservaciones){
         this.idProducto = idProducto;
         this.idNombreP = idNombreP;
         this.idPrecio = idPrecio;
         this.idCantidad = idCantidad;
         this.idFecha = idFecha;
         this.idObservaciones = idObservaciones;

    }
}
//funcionnpara validar los datos

function validarProductos (){
    if(document.getElementById('idProducto').value == ""){
        alert('debe ingresar el codigo');
        return false;
    }
    if(document.getElementById('idNombreP').value == ""){
        alert('debe ingresar el nombre del producto');
        return false;
    }
    if(document.getElementById('idPrecio').value == ""){
        alert('debe ingresar el precio del producto');
        return false;
    }
    if(document.getElementById('idCantidad').value == ""){
        alert('debe ingresar la cantidad de unidades');
        return false;
    }
    if(document.getElementById('idFecha').value == ""){
        alert('debe seleccionar una fecha valida');
        return false;
    }
    if(document.getElementById('idObservaciones').value == ""){
        alert('debe ingresar una obsservacion');
        return false;
    }
    return true;
}

// funcion para poblar el arreglo de los productos
function poblarProductos (){
    let idProducto = document.getElementById('idProducto').value;
    let idNombreP = document.getElementById('idNombreP').value;
    let idPrecio = document.getElementById('idPrecio').value;
    let idCantidad = document.getElementById('idCantidad').value;
    let idFecha = document.getElementById('idFecha').value;
    let idObservaciones = document.getElementById('idObservaciones').value;

   producto.push(new datosProducto(idProducto,idNombreP,idPrecio, idCantidad,idFecha,idObservaciones));

}

// funcion para mostrar los datos

function mostrarProductos (){
    let row = "";

    for (let index = 0; index < producto.length; index++) {
       
        row +='<tr>'
        row += '<td>' + producto[index].idProducto +  '</td>'
        row += '<td>' + producto[index].idNombreP +'</td>'
        row += '<td>' + producto[index].idPrecio +'</td>'
        row += '<td>' + producto[index].idCantidad + '</td>'
        row += '<td>' + producto[index].idFecha + '</td>'
        row += '<td>' + producto[index].idObservaciones + '</td>'
        row +='</tr>'
    }

    document.getElementById('items').innerHTML = row
    
}
 
function agregarProductos(){


    if(validarProductos() == false ){
        return;
    }

    poblarProductos();

    mostrarProductos();

    alert('productos agregados ');
    

}

