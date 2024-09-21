/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

/*criando um array de cores com todas as cores que tem no exercicio*/
const cores = ['primary', 'info', 'success', 'danger', 'warning'];
document.querySelectorAll('[id^="btn"]').forEach((but)=>{
    but.addEventListener('click', (btn)=>{
        let index = btn.target.id.substring(3,4) -1;
        document.querySelector("h3").className = "text-" + cores[index];
    })
})
