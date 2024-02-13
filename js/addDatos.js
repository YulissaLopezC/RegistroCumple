export function addDatos(nombre, fecha, regalo, tablaBody, numcCeldas){

    //crear una nueva fila en el cuerpo de la tabla
    const nuevaFila = tablaBody.insertRow();

    for(let i = 0; i < numcCeldas; i++){
        const cell = nuevaFila.insertCell(i);

        cell.textContent = arguments[i];
    }


    
}

