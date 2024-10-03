const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A melhor solução para evitar queimadas é a prevenção. Conscientizar a população pela cobrança intensa das instituições de controle e combate a queimadas ilegais é um dever de todos. Conversar com as crianças sobre os perigos que as brincadeiras com o fogo podem provocar também pode ser eficaz para evitar acidentes no futuro ?",
        alternativas: [
            "No dia-a-dia, evitar descartar bitucas de cigarros em áreas de vegetação seca!",
            "Queimar, jogar lixos próximos a plantações, matas ou canaviais!"
        ]
    },
    {
        enunciado: "O calor é a fuligem tornam o ar capaz de conduzir corrente elétrica entre a rede elétrica é o solo ou entre os fios. Isso provoca o desligamento  da rede e causa a falta de energia. A falta de luz ocorre não só na região do fogo, como também em várias outras. Pode afetar as escalas, as lojas, os hospitais e muitas outras instituições?",
        alternativas: [
            "A queimada pode causar a interrupção do fornecimento de energia elétrica pois o calor e as chamas podem danificar os cabos e equipamentos da rede elétrica!",
            "a queimada proxima da rede elétrica não tem impacto nenhum e a energia elétrica continuará funcionando norm
        ]
    },
    {
        enunciado: "As consequências das queimadas, de modo geral, são prejudiciais, tanto ao meio ambiental quanto á saúde humana. Imagine que uma floresta seja completamente tomada por uma incẽndio.De forma direta, a queimada causará a destruição ambiental de toda a área, perdendo toda a vida selvagem e as riquezas naturais",
        alternativas: [
            "As queimadas podem causar a destruição de habitats naturais, levando á perda de biodiversidade e ao deslocamento de animais",
            "As queimadas não tem nenhum efeito no clima, pois não liberam gases poluentes ou afetem a qualidade do ar",
        ]
        
    },
    {
        enunciado: "O Instituto Nacional de Pesquisas Espaciais (Inpe) e o Ministério do Meio Ambiente são as instituições responsáveis pelo monitoramento e controle de queimadas no país. Cabe principalmente ao Ministério a elaboração de planos de ação para o combate aos focos de incêndio e o financiamento de equipamento e aviões para o controle",
        alternativas: [
            "Implementar politicas de fiscalização rigorosas e campanhas de conscientização.Isso inclui aumentar a presença de agentes ambientais nas áreas de risco e educar a população sobre os impactos das queimadas, incentivando práticas agricolas sustentáveis e alternativas ao uso do fogo",
            "Ignorar a participação das comunidades locais e impor restrições sem diálogo A falta de envolvimento das populações que vivem nas áreas afetadas podem levar á resistência e desinformação, dificultando a efetividade das medidas de controle"
        ]
    },
    {
        enunciado: "As queimadas são um problema ambiental significativo, afetando a biodiversidade,a qualidade do ar e o clima. Elas ocorrem principalmente na Amazônia, no Cerrado e na Mata Atlântica, frequentemente associadas á expansão agricola e pecuária. O uso do fogo para desmatamento e limpeza de terrenos é uma pratica comum, mas resulta em graves consequências, como a perda de habitat, emissão de gases do efeito estufa e danos á saúde pública",
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();{
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

