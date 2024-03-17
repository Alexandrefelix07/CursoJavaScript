function verificar() {
    var data = new Date();
    var ano = data.getUTCFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '_img/bebe-h.png')
            } else if (idade < 21) {
                img.setAttribute('src', '_img/joven-h.png')
            } else if (idade < 50) {
                img.setAttribute('src', '_img/adulto-h.png')
            } else {
                img.setAttribute('src', '_img/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '_img/bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', '_img/joven-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', '_img/adulto-m.png')
            } else {
                img.setAttribute('src', '_img/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}
