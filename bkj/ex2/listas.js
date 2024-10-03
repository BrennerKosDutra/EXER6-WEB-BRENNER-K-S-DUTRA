function gerarLista() {
    const quantidade = document.getElementById('quantidade').value;
    const nome = "Brenner Kós Dutra"; 

    if (quantidade.trim() === '' || isNaN(quantidade) || quantidade <= 0) {
        document.getElementById('aviso').innerText = 'Por favor, insira um número válido.';
        document.getElementById('lista').innerHTML = '';
        return;
    }

    document.getElementById('aviso').innerText = ''; 
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; 

    for (let i = 1; i <= quantidade; i++) {
        const li = document.createElement('li'); 
        li.innerText = `${nome}, ${i}.`; 
        lista.appendChild(li);  
    }
}
