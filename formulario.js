function validarFormulario(formulario) {

    const campos = formulario.querySelectorAll("input");

    let formularioValido = true;

    campos.forEach(function(campo) {

        if (!campo.checkValidity()) {

            campo.classList.add("campo-erro");

            formularioValido = false;

        } else {

            campo.classList.remove("campo-erro");

        }

    });

    return formularioValido;
}


document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", function(event) {

            event.preventDefault();


            if (validarFormulario(formulario)) {

                Swal.fire({
                    title: "Sucesso!",
                    text: "Formulário preenchido corretamente.",
                    icon: "success"
                });

            } else {

                Swal.fire({
                    title: "Atenção!",
                    text: "Verifique os campos destacados.",
                    icon: "warning"
                });

            }

        });

    }

});