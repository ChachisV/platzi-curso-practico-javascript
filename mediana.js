// function calcularMediaAritmetica(lista){
   
//     const sumaLista = lista.reduce(
//         function (valorAcumulado , nuevoElemento){
//             return valorAcumulado + nuevoElemento;
//         }
//     );
    
//     const promedioLista = sumaLista / lista.length;
    
//     return  promedioLista;
    
// }


// const lista1 = [
//     100, 
//     200, 
//     500, 
//     400000000, 
// ];

// const mitadLista = parseInt(lista.length / 2);

// function esPar(numerito){
//     if(numerito % 2 === 0 ){
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if (esPar(lista.length)){
//     const elemento1 = lista[mitadLista -1];
//     const elemento2 = lista[mitadLista];

//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ])

//     mediana = promedioElemento1y2;

// }else {
//     mediana = lista[mitadLista];
// }


function calcularMediana(lista){
    
    const listaOrdenada = lista.sort(function(a,b) {return a - b});
    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);
    
    function esPar(numerito){
        if(numerito % 2 === 0 ){
            return true;
        } else {
            return false;
        }
    }

    function calcularMediaAritmetica(lista){

        const sumaLista = lista.reduce(
            function (valorAcumulado , nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
        
        const promedioLista = sumaLista / lista.length;
        
        return  promedioLista;
        }

    let mediana;

    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadListaOrdenada -1];
        const elemento2 = listaOrdenada[mitadListaOrdenada];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])

        mediana = promedioElemento1y2;

    }else {
        mediana = listaOrdenada[mitadListaOrdenada];
    }

    return mediana 
}