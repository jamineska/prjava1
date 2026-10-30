/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

Pasos:
inicio
-crear función que acepte una palabra como parámetro
-separar el resultado
-declarar variable
-aplicar la funcion del resultado recorriendo antes
-volver a unir quitando comas y devolviendo resultado
-Escribir resultado de la declaracion
Fin
_______

/*function transformarMayuscula (marcas){
let resultado= marcas.split (""); //para separar
const marcaNueva=[] //para declarar 
resultado.forEach((marca)=>marcaNueva.push(marca.toUpperCase()+" "))//para recorrer y ponerlas en mayúscula
const resumo=marcaNueva.join("")
return resumo
}

console.log(transformarMayuscula ("ana"))*/



/*Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

Pasos:
inicio
-crear función que acepte un nombre como parámetro y plasmarla
-separar palabra o número resultante de la función
-devolver resultado
-Escribir resultado
Fin
_______

function cantPalabras (nombre) {
    let array= nombre.split (" ")
    console.log(array)
       return array.length;
   }
console.log(cantPalabras ("Antonio Alberto Jesús"))
console.log(cantPalabras ("Antonio Alberto Jesús pedro"))*/


/*Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.  

Pasos:
inicio
-crear funcion que reciba como parametro una frase y una letra que elijamos dentro de la frase
-crear bucle para reorrer la frase, si la letra que buscamos coincide dentro de la frase aumentamos el contador en uno
-devolver y escribir resultado
Fin
*/

function contarPalabra(buscarLetra, frase) {

    let contador = 0
    for (const value of frase) {
        if (value == buscarLetra) {
            contador++
        }
    }
    return contador
}

console.log(contarPalabra("a", "la casa es bonita"));
console.log(contarPalabra("o", "yo soy contable"));

