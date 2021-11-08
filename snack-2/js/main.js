/* 
Snack 2
A partire da un array di numeri, genera un secondo array con le potenze 
al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('numeri normali:', number);
const quadrato = number.map((number) => {
    const element = number * number

    return element
})

console.log('numeri al quadrato', quadrato);