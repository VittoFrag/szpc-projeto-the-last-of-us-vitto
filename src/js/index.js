/* 
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

Passo 1 - dar um jeito de pegar o elemento HTML dos botões

Passo 2 - dar um jeito de identificar o clique do usuario no botão

Passo 3 - desmarcar o botão selecionado anterior

passo 4 - marcar o botão clicando como se estivesse selecionado

passo 5 - esconder a imagem de fundo ativa anterior

passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();
        
        selecionarBotaoCarrossel(botao);
        
        esconderImagemFundoAtiva();
        
        mostrarImagemDeFundo(indice);

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemFundoAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
