function contar() {
    var inicio = document.querySelector('input#inicio');
    var fim = document.querySelector('input#fim');
    var passo = document.querySelector('input#passo');
    var resposta = document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resposta.innerHTML = 'Impossível contar';
        //window.alert('Faltam dados!');
    } else {
        resposta.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1');
            p = 1;
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p){
                resposta.innerHTML += `${c} \u{1F449} `;
            } 
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += `${c} \u{1F449} `;
            }
        }
        resposta.innerHTML += `\u{1F3C1}`;
        
    }
} 