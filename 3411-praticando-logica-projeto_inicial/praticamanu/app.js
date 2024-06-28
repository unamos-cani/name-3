function capturarValores() {
    let nome= document.getElementById("campoNome").value;
    let idade =document.getElementById("campoIdade").value;
    
    document.getElementById("mostrarNome").textContent = `Nome: ${nome}, Idade: ${idade}`;
}

let amigos = [];

