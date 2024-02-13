export function delDatos(tablaBody){

    console.log("eliminar");

    const filas = tablaBody.getElementsByTagName("tr");

    for(let i = filas.length - 1; i >= 0; i--){
        tablaBody.removeChild(filas[i]);
    }
}