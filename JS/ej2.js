// crear una funcion que acepte un parametro con los valores de 1 a 5. Si el valor es 1 mostrar una lista del 1 al 10, si es 2, de 2 al 10


function contarValores(num) {
    let arr =[];
    let j=num;
    let lenght = 11;

    if (num <1 || num >5 ){
        alert("Ingrese un numero de 1 a 5")
    }else{
        for (; j < lenght; j++) {
            arr.push(j);
        }
        return arr;
    }
}

console.log(contarValores(6))