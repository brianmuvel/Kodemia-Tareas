/*
let unorderedNumbers = [21, 232, 212, 34, 12, 9, 2, 43, 56, 88, 93, 2020]

let otroArray = [1,2,3]

function sort(array){
  for (let i = 0; i < array.length; i++){
    for (let j = i+1; j < array.length; j++){
    let actual = array[i]
    let siguiente = array[j]

    if (actual > siguiente){
      //intercambiamos, aux es como la mano que agarra los valores temporalmente
      array[i] = siguiente
      array[j] = actual

    }
    if (actual <= siguiente){
      //nada, continuamos 
      continue
    }
    }
  }
}

sort(unorderedNumbers)
sort(otroArray)
*/
/*Crea una función que combine dos arreglos de números  y retorne el resultado como un nuevo arreglo
*/

/*
let array1 = [0,2,3,4,5,56,6,7,5,4,3,23,5,6,7]
let array2 = [334,335,235,64,76,21,10,11]
let nuevoArray = 0

function uneArreglo (resultado){
  for (i=0; i < array1.length; i++){
    console.log(array1[i])
  }
  for (j=0; j < array2.length; j++){
    console.log(array2[j])
  }
  resultado = array1 + array2
}
uneArreglo(nuevoArray)

*/
/*
Escribe una función que reciba dos arreglos de números y retorne un sólo arreglo con los elementos que se encuentran en el primer arreglo pero no en el segundo.
*/
let arr1= [0,2,3,4,5,56,6,7,5,4,3,23,5,6,7]
let arr2 = [334,335,235,64,76,21,10,11]
let newArray = 0

function uneOtroArreglo (result){
  let primero =0
  for (i=0; i < arr1.length; i++){
    let primero = arr1[i]
    console.log(primero)
  }
  
  for (j=0; j < arr2.length; j++){
    let segundo = arr2[j]
  }
  
}
uneOtroArreglo(newArray)