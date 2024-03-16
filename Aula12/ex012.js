var hora = new Date();
console.log(`Agora são exatamente ${hora.getHours()} horas.`)
if (hora >= 8 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 0) {
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}
