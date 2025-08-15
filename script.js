const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como vocêquer que seja sua relação com sua família",
        alternativas: [
            {
                texto: "amorosa e cheia de diálogo",
                afirmacao: "conversas profundas fortalecem o vinculo entre todos"
            },
            {
                texto: "desequilibrada e sem respeito",
                afirmacao: "todos sem liberdade e sem apoio "
            }
        ]
    },
    {
        enunciado: "aual sera sua principal fonte de renda?",
        alternativas: [
            {
                texto: "seu proprio negocio",
                afirmacao: "voce lidera sua empresa e cria algo com impacto real"
            },
            {
                texto: "atendende de uma empresa grande",
                afirmacao: "sua rotina e muit corrida e voce ganha um salario minimo"
            }
        ]
    },
    {
        enunciado: "o que voce quer ensinar para seus filhos, ou familiares",
        alternativas: [
            {
                texto: "amor, respeito e empatia",
                afirmacao: "eles crescem valorizando o lado humano da vida"
            },
            {
                texto: "futilidade e ganância",
                afirmacao: "eles crescem sendo pessoas horriveis e sem coração"
            }
        ]
    },
    {
        enunciado: "onde voce quer estar profissionalmente daqui 10 anos?",
        alternativas: [
            {
                texto: "no topo da carreira",
                afirmacao: "reconhecimento e autoridade no seu setor"
            },
            {
                texto: "ainda trabalhando como atendende",
                afirmacao: "continua ganhando salario minimo e com muitas contas"
            }
        ]
    },
    {
        enunciado: "como voce quer ser lembrado pela sua familia no futuro?",
        alternativas: [
            {
                texto: "sempre presente.",
                afirmacao: "cada momentos importantes voce esteve la"
            },
            {
                texto: "distante e arrogante",
                afirmacao: "nao deu importância a familia, entao eles nao lembram de você"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
