function contar() {
    let ini = Number(document.getElementById('txtnum').value);
    let fim = Number(document.getElementById('txtfim').value);
    let pass = Number(document.getElementById('txtpas').value);
    var res = document.getElementById('res');

    if (pass <= 0 || fim <= 0 || ini <= 0) {
        res.innerHTML = "O campos devem ser maior que zero.";
        //return;
        //window.alert('[ERRO] falta dados para contar')
    } else {
        res.innerHTML = 'Contando:</br>';
        //res.innerHTML = `Inicio ${ini} com fim ${fim} pulando ${pass}.`
        if (ini < fim) {
            for (let index = ini; index <= fim; index += pass) {
                res.innerHTML += ` ${index} \u{1F449}`
            }
        } else {
            for (let index = ini; index >= fim; index -= pass) {
                res.innerHTML += ` ${index} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
