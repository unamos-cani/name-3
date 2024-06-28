let jogosAlugados = 0;

function contarMostrarJogosAlugados(){
    console.log(`Quantidade de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let botao = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você deseja devolver ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';  
            jogosAlugados--;          
        }

    }else{
        confirm(`Você está alugando o jogo ${nomeJogo.textContent}`);
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        jogosAlugados++;        
    }

    contarMostrarJogosAlugados(); 
}


