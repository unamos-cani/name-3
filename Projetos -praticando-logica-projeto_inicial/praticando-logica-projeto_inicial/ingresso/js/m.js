let qtdPista = parseFloat(document.getElementById('qtd-pista').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

//obs da function comprar():
// --> comprar um dos tipos oferecidos
//ifelse (qtdIngresso > qtdPista) --> caso a pessoa queira comprar mais ingressos do que disponiveis em um tipo.
function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = document.getElementById('qtd').value;

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipo == 'pista' && qtdPista > 0) {
        if (qtdIngresso > qtdPista) {
            alert('Quantidade indisponível para Pista.');            
        }else{
            qtdPista = qtdPista - qtdIngresso;
            let atualizarPista = document.getElementById('qtd-pista');
            atualizarPista.innerHTML = `<span id="qtd-pista">${qtdPista}</span>`;
            alert('Compra realizada com sucesso!');
        }
    }else if (tipo == 'superior' && qtdSuperior > 0){
        if(qtdIngresso > qtdSuperior){
            alert('Quantidade indisponível para Cadeira Superior.');
        }else{
            qtdSuperior = qtdSuperior - qtdIngresso;
            let atualizarSuperior = document.getElementById('qtd-superior');
            atualizarSuperior.innerHTML = `<span id="qtd-superior">${qtdSuperior}</span>`;
            alert('Compra realizada com sucesso!');
        }
    }else if(tipo == 'inferior' && qtdInferior > 0){
        if (qtdIngresso > qtdInferior) {
            alert('Quantidade indisponível para Cadeira Inferior.');
        } else {
            qtdInferior = qtdInferior - qtdIngresso;
            let atualizarInferior = document.getElementById('qtd-inferior');
            atualizarInferior.innerHTML = `<span id="qtd-inferior">${qtdInferior}</span>`;
            alert('Compra realizada com sucesso!');            
        }

    }else{
        alert('Lamentamos! Os ingressos esgotaram.');
    }
}


