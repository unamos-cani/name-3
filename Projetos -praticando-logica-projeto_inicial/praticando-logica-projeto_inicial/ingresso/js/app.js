let qtdPista = parseFloat(document.getElementById('qtd-pista').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function atualizarQuantidade(tipo, qtdIngresso) {
    let elemento = document.getElementById(`qtd-${tipo}`);
    let quantidadeAtual = parseInt(elemento.textContent);

    if (qtdIngresso > quantidadeAtual) {
        alert(`Quantidade indisponível para ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}.`);
    } else {
        quantidadeAtual -= qtdIngresso;
        elemento.innerHTML = `<span id="qtd-${tipo}">${quantidadeAtual}</span>`;
        alert('Compra realizada com sucesso!');
    }
}

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtdIngresso) || qtdIngresso <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    switch (tipo) {
        case 'pista':
            atualizarQuantidade('pista', qtdIngresso);
            break;
        case 'superior':
            atualizarQuantidade('superior', qtdIngresso);
            break;
        case 'inferior':
            atualizarQuantidade('inferior', qtdIngresso);
            break;
        default:
            alert('Lamentamos! Os ingressos esgotaram.');
            break;
    }
}

//limpando o campo escolha o tipo inicial.
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('tipo-ingresso').value = '';
});