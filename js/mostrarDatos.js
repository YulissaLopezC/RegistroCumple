import { addDatos } from "./addDatos.js";
import { delDatos } from "./delDatos.js";
document.addEventListener("DOMContentLoaded", function(){
    // llamar los elementos
    const miForm = document.getElementById("miForm");
    //llama la tabla
    const miTabla = document.getElementById("tabla");
    console.log("hola putos " , miTabla)
    //llama cuerpo de la tabla
    const bodyData = document.getElementById("bodyData");
    //llama boton delete
    const btnDel = document.getElementById("btnDel");

    //calcular numero de celdas de cada fila tomando como referencia encabezado
    const filEncabezado = miTabla.rows[0];
    const numCells = filEncabezado.cells.length;
    console.log(numCells);

    miForm.addEventListener("submit", (event)=>{
        //evita que el submit recargue la pagina
        event.preventDefault();

        //traer los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const regalo = document.getElementById("regalo").value;

        addDatos(nombre, fecha, regalo, bodyData, numCells);

        miForm.reset();
    })

    btnDel.addEventListener("click", ()=> {

        delDatos(bodyData);

    })




})