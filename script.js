const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em você mesmo e tudo será possível.",
    "Cada dia é uma nova oportunidade para mudar sua vida.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Seja a mudança que você quer ver no mundo.",
    "Nunca é tarde para ser aquilo que você sempre quis ser.",
    "O único limite para a realização do amanhã são as dúvidas do hoje.",
    "Faça o que você pode, com o que você tem, onde você está.",
    "A persistência é o caminho do êxito.",
    "Sonhe grande e dê o primeiro passo."
];

const botaoGerar = document.getElementById('gerar-frase');//esse id é do botão
const fraseElement = document.getElementById('frase-motivacional');
//esse id é do paragrafo que vai aparecer a frase

function gerarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    //aqui, cria um indice aleatorio com base no tamanho do array de frases 
    fraseElement.textContent = frases[indiceAleatorio];
}   //aqui adicina a frase no paragrafo

gerarFraseAleatoria();// já abre com uma frase gerada

botaoGerar.addEventListener('click', gerarFraseAleatoria); //ai aqui, ele
//vai e coloca uma frase nova