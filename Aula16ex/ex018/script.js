let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
var res = document.getElementById('res');
let valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`
        item.value = `tab${num.value}`
        lista.appendChild(item)
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores a lista antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (const pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot;
        res.innerHTML = ''
        res.innerHTML += `</p>Ao todo, temos ${tot} numeros cadastrados!`
        res.innerHTML += `</p>O Maior valor cadastrados e ${maior} !`
        res.innerHTML += `</p>O Menor valor cadastrados e ${menor} !`
        res.innerHTML += `</p>A soma dos valores cadastrados e ${soma} !`
        res.innerHTML += `</p>A media dos valores cadastrados e ${media} !`
    }

}