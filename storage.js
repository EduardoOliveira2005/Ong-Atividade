function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

function carregarDados(chave) {
    const dados = localStorage.getItem(chave);

    if (dados) {
        return JSON.parse(dados);
    }

    return [];
}

/*salvarDados("projetos", projetos);

const projetosSalvos = carregarDados("projetos");* */