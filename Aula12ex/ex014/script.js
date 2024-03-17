function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas. `

    if (hora >= 0 && hora < 12) {
        img.src = '_img/dia.png'
        document.body.style.background = '#bee6e9';
    } else if (hora >= 12 && hora < 18) {
        img.src = '_img/tarde.png';
        document.body.style.background = '#fde0a4';
    } else {
        img.src = '_img/noite.png'
        document.body.style.background = '#096095';
    }
}
