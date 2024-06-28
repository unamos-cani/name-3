let carrinhoDeCompras = document.getElementById('lista-produtos');
carrinhoDeCompras.textContent = '';
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = 'R$ 0';
let nomeProduto = document.getElementById('produto');
nomeProduto.value = '';
//limpando valores iniciais 

let valorTotal = 0; 

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    
    if (quantidade >= 1 ) {
        console.log('manu')
    } else {
        alert('Quantidade inválida! Digite novamente');
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco = quantidade * valorUnitario;
    let carrinhoDeCompras = document.getElementById('lista-produtos');
    carrinhoDeCompras.innerHTML = carrinhoDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
        // adicionando no carrinho 

    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
    //valortotal

}


function limpar() {
    nomeProduto.value = '';
    quantidade.value = '';
    carrinhoDeCompras.textContent = '';
    campoTotal.textContent = 'R$ 0';
} 
// limpando carrinho 

