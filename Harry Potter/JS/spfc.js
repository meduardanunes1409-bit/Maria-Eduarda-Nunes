// spfc.js (corrigido nome)

// Função para ir para a tela de história (Tela 2)
function irParaHistoria() {
    const telaInicio = document.getElementById('tela-inicio');
    const telaHistoria = document.getElementById('tela-historia');

    // some com a tela de início
    telaInicio.classList.remove('tela-ativa');
    
    // aparece a tela de história
    setTimeout(() => {
        telaHistoria.classList.add('tela-ativa');
    }, 300);
}

// Função para voltar para o início
function voltarInicio() {
    const telaHistoria = document.getElementById('tela-historia');
    const telaInicio = document.getElementById('tela-inicio');

    telaHistoria.classList.remove('tela-ativa');
    
    setTimeout(() => {
        telaInicio.classList.add('tela-ativa');
    }, 300);
}

// --- Efeitos Extras para a Tela Inicial ---

// Animação da bola ao carregar a página
window.onload = function() {
    console.log("Bem-vindo ao Morumbi!");
};
