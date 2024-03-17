let num = [5, 2, 3, 1, 7]
num.push(9)
console.log(`Nosso vetor e o: ${num}`)
console.log(`Nosso vetor tem o tamanho de: ${num.length}`)
console.log(`Nosso vetor em sort : ${num.sort()}`)
let pos = num.indexOf(3);
if (pos == -1) {
    console.log(`Valor nao encontrado!`)
} else {
    console.log(`Nosso vetor ta na posição : ${pos}`)
}
