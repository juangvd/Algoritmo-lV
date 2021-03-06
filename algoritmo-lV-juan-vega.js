////////////////////////////////////////////////////////////////////////////

//                              Algoritmo IV                             //

////////////////////////////////////////////////////////////////////////////


//  1.- Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.
/*


function mayoresQueY() {
    var array = [1, 3, 5, 7, 9];
    var y = 5;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > y) {
            console.log('Este numero es mayor que Y : ', array[i]);
        }
    }
    return ('Este es el valor de Y: ' + y);
}
console.log(mayoresQueY());


*/
//  2.- Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.
/*


function valorMaxMinProm(x) {
    var max = x[0];
    var min = x[0];
    var suma = 0;

    for (var i = 0; i < x.length; i++) {
        if (min > x[i]) {
            min = x[i];
        }
        if (max < x[i]) {
            max = x[i];
        }
        suma += x[i];
    }
    return [('El valor máximo es: ' + max),
    ('El valor minimo es: ' + min),
    ('El promedio es: ' + suma / x.length)];
}
console.log(valorMaxMinProm([3, 6, 9, 12, 15, 18]));


*/
//  3.- Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
/*


function cambiarTexto(x) {

    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
    return x;
}
console.log(cambiarTexto([3, -9, 5, -4, 7]));


*/
//  4.- Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
/*


function remover(a, b, c) {
    var nuevoRango = [];

    for (var i = 0; i < a.length; i++) {
        if (!(i >= b && i <= c)) {
            nuevoRango.push(a[i]);
        }
    }
    return nuevoRango;
}
console.log(remover([20, 30, 40, 50, 60, 70], 2, 4));


*/