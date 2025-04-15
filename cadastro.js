let dadosCadastrados = [];

// Elementos do DOM
const form = document.querySelector('form');
const listaDados = document.getElementById('lista-dados');

// Função para salvar os dados
function salvarDados(event) {
    event.preventDefault();

    // pegar os valore os do forms
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('Idade').value;
    const genero = document.getElementById('genero').value;

    // Criar um objeto com os dados que foram pegos
    const dados = {
        nome,
        idade,
        genero
    };

    // colocar os dados no array
    dadosCadastrados.push(dados);

    // mostrar na tela
    exibirDados();

    // Limpar o formulário
    form.reset();
}

// Função pra mostrar na tela
function exibirDados() {
    listaDados.innerHTML = ''; // Limpa a lista atual

    dadosCadastrados.forEach((dados, index) => {
        const card = document.createElement('div');
        card.className = 'card-dados';
        card.innerHTML = `
            <p><strong>Nome:</strong> ${dados.nome}</p>
            <p><strong>Idade:</strong> ${dados.idade}</p>
            <p><strong>Gênero:</strong> ${dados.genero}</p>
            <button onclick="removerDados(${index})">Remover</button>
        `;
        listaDados.appendChild(card);
    });
}

// Função para remover dados
function removerDados(index) {
    dadosCadastrados.splice(index, 1);
    exibirDados();
}

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', salvarDados); 