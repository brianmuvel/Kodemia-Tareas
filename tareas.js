/*Escribir una función que reciba un arreglo de números desordenados.
La función debe crear un nuevo arreglo con los mismos números pero ordenados de menor a mayor.
Deben mostrar en la consola ambos arreglos, el ordenado  y el desordenado
*/
let numerosRan = [21, 232, 212, 34, 12, 9, 2, 43, 56, 88, 93, 2020]

function compararNum (valor1, valor2){
  return valor1 - valor2
}

compararNum => valor1 -valor2
function ordenarNum (){
  let nuevoArray = numerosRan.sort(compararNum)
  console.log(nuevoArray)
}
ordenarNum()
