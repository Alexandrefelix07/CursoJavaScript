let amigo = {
    nome: 'jose', sexo: 'M', peso: 90.5,
    engordar(p = 0) {
        //if (p > 80) {
        this.peso += p
        // return 'obeso'
        //} else {
        // return 'magro'
        //}
    }
}
amigo.engordar(2)
console.log(`Nome: ${amigo.nome}`);
console.log(`Sexo: ${amigo.sexo}`);
console.log(`Peso: ${amigo.peso}`);
//console.log(`${amigo.nome} pesa ${amigo.peso} seu estado e ${amigo.engordar(amigo.peso)}`);