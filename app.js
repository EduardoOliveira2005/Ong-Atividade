function abrirMenu() {

    const menu = document.querySelector(".menu");

    if (menu) {
        menu.classList.toggle("menu-aberto");
    }

}


document.addEventListener("DOMContentLoaded", function() {

    const botoes = document.querySelectorAll("button");

    botoes.forEach(function(botao) {

        botao.addEventListener("click", function() {

            console.log("Botão clicado");

        });

    });


    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", function(event) {

            event.preventDefault();

            console.log("Formulário enviado");

        });


        formulario.addEventListener("input", function(event) {

            console.log("Campo alterado:", event.target.name);

        });

    }

});