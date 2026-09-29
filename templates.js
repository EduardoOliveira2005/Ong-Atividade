function criarProjetos(projetos) {
    return projetos.map(function(projeto) {
        return `
            <article class="card">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;
    }).join("");
}

function renderizarProjetos(projetos, elemento) {
    elemento.innerHTML = criarProjetos(projetos);
}

const projetos = [
    {
        titulo: "Campanha de Doação",
        descricao: "Arrecadação de alimentos para famílias."
    },
    {
        titulo: "Voluntariado",
        descricao: "Ações sociais realizadas pela ONG."
    }
];