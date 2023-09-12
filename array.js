let arrayNumbers = [12, 28, 189, 1879, 4, 2999]
let maxNumber = 0
let tamaño = arrayNumbers.length

for (let i = 0; i < tamaño; i++) {
  if (maxNumber < arrayNumbers[i]) {
    maxNumber = arrayNumbers[i]
  }
}

console.log(maxNumber);

let maximo = Math.max(12, 28, 1879, 4, 2999);

console.log(maximo);