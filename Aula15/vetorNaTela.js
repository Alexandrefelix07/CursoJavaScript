let num = [2, 5, 5, 6, 7]

// for (let pos = 0; pos < num.length; pos++) {
//     console.log(num[pos]);
// }

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor de: ${num[pos]}`)
}