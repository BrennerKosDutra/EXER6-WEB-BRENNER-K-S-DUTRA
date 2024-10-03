function mostrarMensagem() {
    const nome = document.getElementById('nome').value;
    if (nome.trim() === '') {
        document.getElementById('mensagem').innerText = 'Por favor, insira seu nome.'
} else{
    document.getElementById('mensagem').innerText = `Olá, ${nome}. Que bom que está aqui!`;
}
}

