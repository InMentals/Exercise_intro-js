const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    
//El error estaba en la condicion i<=numeros.length
    for (let i=0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }


    const promedio = sumaTotal / numeros.length;
    return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

