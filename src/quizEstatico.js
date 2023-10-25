// Perguntas
const ingles = [
    {
        question: "Qual é a forma correta do verbo 'to be' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "am", correct: false },
            { text: "is", correct: true },
            { text: "are", correct: false },
            { text: "be", correct: false }
        ]
    },
    {
        question: "Qual a forma correta do verbo 'to have' na forma interrogativa?",
        answers: [
            { text: "Have you", correct: true },
            { text: "You have", correct: false },
            { text: "Has you", correct: false },
            { text: "You has", correct: false }
        ]
    },
    {

        question: "Qual é a forma correta do verbo 'to do' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "do", correct: false },
            { text: "does", correct: true },
            { text: "doing", correct: false },
            { text: "done", correct: false }
        ]
    },
    {
        question: "Escolha o pronome pessoal correto para completar a frase: '______ like ice cream.'",
        answers: [
            { text: "I", correct: true },
            { text: "My", correct: false },
            { text: "Mines", correct: false },
            { text: "Me", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'to swim' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "swim", correct: false },
            { text: "swam", correct: false },
            { text: "swims", correct: true },
            { text: "swum", correct: false }
        ]
    },
    {
        question: "Qual é o passado simples da palavra 'read'",
        answers: [
            { text: "read", correct: true },
            { text: "red", correct: false },
            { text: "reed", correct: false },
            { text: "rade", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'By the time I arrived, they had already left.'",
        answers: [
            { text: "Presente simples", correct: false },
            { text: "Passado simples", correct: false },
            { text: "Passado contínuo", correct: false },
            { text: "Passado perfeito", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'If I _____ the answer, I would tell you.'",
        answers: [
            { text: "know", correct: false },
            { text: "knew", correct: true },
            { text: "known", correct: false },
            { text: "knows", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'She will have been working here for five years by next month?'",
        answers: [
            { text: "Futuro simples", correct: false },
            { text: "Presente perfeito contínuo", correct: true },
            { text: "Passado simples", correct: false },
            { text: "Passado contínuo", correct: false }
        ]
    },
    {
        question: "Qual a alternativa correta para preencher o espaço em branco: 'If I had known it was your birthday, I ______ you a gift.'",
        answers: [
            { text: "would buy", correct: false },
            { text: "would have bought", correct: true },
            { text: "will buy", correct: false },
            { text: "had bought", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do tempo condicional perfeito em inglês para a frase: 'Se eu soubesse, teria te ajudado'?",
        answers: [
            { text: "Known", correct: false },
            { text: "Helped", correct: false },
            { text: "Would", correct: false },
            { text: "Had", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: '______ you go, I will follow.'",
        answers: [
            { text: "Wherever", correct: true },
            { text: "Whenever", correct: false },
            { text: "Whatever", correct: false },
            { text: "However", correct: false }
        ]
    },
    {
        question: "Qual e a forma correta no plurar da palavra 'child'?",
        answers: [
            { text: "childs", correct: false },
            { text: "child's", correct: false },
            { text: "children", correct: true },
            { text: "childes", correct: false }
        ]
    },
    {
        question: "Escolha a palavra correta para completar a frase: 'She is ____ student.'",
        answers: [
            { text: "an", correct: true },
            { text: "a", correct: false },
            { text: "the", correct: false },
            { text: "some", correct: false }
        ]
    },
    {
        question: "Qual o superlativo do adjetivo 'good'?",
        answers: [
            { text: "better", correct: false },
            { text: "goodest", correct: false },
            { text: "best", correct: true },
            { text: "goods", correct: false }
        ]
    },
    {
        question: "Qual palavra e sinônimo de 'happy'?",
        answers: [
            { text: "sad", correct: false },
            { text: "angry", correct: false },
            { text: "joyful", correct: true },
            { text: "mad", correct: false }
        ]
    },
    {
        question: "Escolha a preposição correta: 'She is afraid ____ spiders.'",
        answers: [
            { text: "of", correct: true },
            { text: "in", correct: false },
            { text: "on", correct: false },
            { text: "with", correct: false }
        ]
    },
    {
        question: "Escolha qual é um verbo modal em Inglés?",
        answers: [
            { text: "Do", correct: false },
            { text: "Can", correct: true },
            { text: "Run", correct: false },
            { text: "Jump", correct: false }
        ]
    },
    {
        question: "Escolha a forma comparativa correta do adjetivo 'tall': 'He is _____ than his brother.'",
        answers: [
            { text: "taller", correct: true },
            { text: "tallest", correct: false },
            { text: "more tall", correct: false },
            { text: "talliest", correct: false }
        ]
    },
    {
        question: "Qual é a forma plural correta de 'people' em inglês?",
        answers: [
        { text: "peoples", correct: true },
        { text: "peoplen", correct: false },
        { text: "peopler", correct: false },
        { text: "people's", correct: false }
        ]
    }
];
const espanhol = [
    {
        question: "Qual é a forma correta do verbo 'ser' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "soy", correct: false },
            { text: "es", correct: true },
            { text: "son", correct: false },
            { text: "sea", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'tener' na forma interrogativa?",
        answers: [
            { text: "¿Tienes tú?", correct: true },
            { text: "Tú tienes", correct: false },
            { text: "¿Tiene tú?", correct: false },
            { text: "Tú tiene", correct: false }
        ]
    },
    {

        question: "Qual é a forma correta do verbo 'hacer' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "hacie", correct: false },
            { text: "hace", correct: true },
            { text: "haciendo", correct: false },
            { text: "hecho", correct: false }
        ]
    },
    {
        question: "Escolha o pronome pessoal correto para completar a frase: '______ le gusta el helado.'",
        answers: [
            { text: "Yo", correct: true },
            { text: "Mi", correct: false },
            { text: "Mis", correct: false },
            { text: "Me", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'nadar' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "nadar", correct: false },
            { text: "nadó", correct: false },
            { text: "nada", correct: true },
            { text: "nadado", correct: false }
        ]
    },
    {
        question: "Qual é o passado simples da palavra 'leer'?",
        answers: [
            { text: "leyó", correct: true },
            { text: "rojo", correct: false },
            { text: "caña", correct: false },
            { text: "leyendo", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'Cuando llegué, ellos ya se habían ido'.",
        answers: [
            { text: "Presente simple", correct: false },
            { text: "Pasado simple", correct: false },
            { text: "Pasado continuo", correct: false },
            { text: "Pasado perfecto", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'Si yo _____ la respuesta, te lo diría.'",
        answers: [
            { text: "sé", correct: false },
            { text: "sabía", correct: true },
            { text: "sabido", correct: false },
            { text: "sabe", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'Ella habrá estado trabajando aquí durante cinco años para el próximo mes'.",
        answers: [
            { text: "Futuro simple", correct: false },
            { text: "Presente perfecto continuo", correct: true },
            { text: "Pasado simple", correct: false },
            { text: "Pasado continuo", correct: false }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'Si hubiera sabido que era tu cumpleaños, te ______ un regalo.'",
        answers: [
            { text: "compraría", correct: false },
            { text: "habría comprado", correct: true },
            { text: "compraré", correct: false },
            { text: "había comprado", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do condicional perfeito em espanhol para a frase: 'Si hubiera sabido, habría ayudado'?",
        answers: [
            { text: "Sabido", correct: false },
            { text: "Ayudado", correct: false },
            { text: "Haría", correct: false },
            { text: "Habría", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco. '______ vayas, yo te seguiré.'",
        answers: [
            { text: "Dondequiera", correct: true },
            { text: "Cuandoquiera", correct: false },
            { text: "Cualquier cosa", correct: false },
            { text: "Sin embargo", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'hablar' na primeira pessoa do singular do presente?",
        answers: [
            { text: "hablo", correct: true },
            { text: "habla", correct: false },
            { text: "hablas", correct: false },
            { text: "hablamos", correct: false }
        ]
    },
    {
        question: "Escolha o pronome pessoal correto para completar a frase: '_____ gusta la música.'",
        answers: [
            { text: "Me", correct: false },
            { text: "Te", correct: false },
            { text: "Nos", correct: false },
            { text: "Le", correct: true }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'escrever' no imperativo da segunda pessoa do plural?",
        answers: [
            { text: "escribéis", correct: true },
            { text: "escribe", correct: false },
            { text: "escribamos", correct: false },
            { text: "escribes", correct: false }
        ]
    },
    {
        question: "Qual é o plural de 'niño'?",
        answers: [
            { text: "niñes", correct: false },
            { text: "niños", correct: true },
            { text: "niñitos", correct: false },
            { text: "niñas", correct: false }
        ]
    },
    {
        question: "Escolha a alternativa correta para completar a frase: 'Voy a la tienda ____ comprar comida.'",
        answers: [
            { text: "para", correct: true },
            { text: "con", correct: false },
            { text: "por", correct: false },
            { text: "en", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'vivir' na terceira pessoa do singular no passado perfeito simples?",
        answers: [
            { text: "viví", correct: false },
            { text: "vivió", correct: true },
            { text: "vivido", correct: false },
            { text: "vive", correct: false }
        ]
    },
    {
        question: "Escolha o adjetivo correto para completar a frase: 'Es un día _____.'",
        answers: [
            { text: "soleado", correct: true },
            { text: "lluvioso", correct: false },
            { text: "ventoso", correct: false },
            { text: "nublado", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'ser' na segunda pessoa do singular do imperativo?",
        answers: [
            { text: "sea", correct: false },
            { text: "seas", correct: true },
            { text: "serás", correct: false },
            { text: "seres", correct: false }
        ]
    }
];
const frances = [
    {
        question: "Qual é a forma correta do verbo 'être' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "suis", correct: false },
            { text: "est", correct: true },
            { text: "sommes", correct: false },
            { text: "être", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'avoir' na forma interrogativa?",
        answers: [
            { text: "As-tu", correct: true },
            { text: "Tu as", correct: false },
            { text: "Avez-vous", correct: false },
            { text: "Vous avez", correct: false }
        ]
    },
    {

        question: "Qual é a forma correta do verbo 'faire' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "fait", correct: false },
            { text: "faites", correct: false },
            { text: "fais", correct: true },
            { text: "faies", correct: false }
        ]
    },
    {
        question: "Escolha o pronome pessoal correto para completar a frase: '______ aime la glace.'",
        answers: [
            { text: "Je", correct: true },
            { text: "Mon", correct: false },
            { text: "Mes", correct: false },
            { text: "Me", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'nager' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "nage", correct: true },
            { text: "naget", correct: true },
            { text: "nages", correct: false },
            { text: "nagent", correct: false }
        ]
    },
    {
        question: "Qual é o passado simples da palavra 'lire'?",
        answers: [
            { text: "lut", correct: true },
            { text: "rouge", correct: false },
            { text: "roseau", correct: false },
            { text: "roseau", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'Quand je suis arrivé, ils étaient déjà partis'?",
        answers: [
            { text: "Présent simple", correct: false },
            { text: "Passé simple", correct: true },
            { text: "Passé continu", correct: false },
            { text: "Passé composé", correct: false }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'Si je _____ la réponse, je te le dirais.'",
        answers: [
            { text: "sais", correct: false },
            { text: "savais", correct: true },
            { text: "su", correct: false },
            { text: "saias", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'Elle aura travaillé ici pendant cinq ans d'ici le mois prochain'?",
        answers: [
            { text: "Futur simple", correct: false },
            { text: "Passé composé", correct: false },
            { text: "présent simple", correct: false },
            { text: "Futur antérieur", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'Si j'avais su que c'était ton anniversaire, je t'______ un cadeau.'",
        answers: [
            { text: "achèterais", correct: false },
            { text: "aurais acheté", correct: true },
            { text: "acheterai", correct: false },
            { text: "avais acheté", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do condicional perfeito em francês para a frase: 'Si j'avais su, j'aurais aidé'?",
        answers: [
            { text: "Su", correct: false },
            { text: "Su", correct: false },
            { text: "Ferait", correct: false },
            { text: "Aurais", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: '______ tu iras, je te suivrai.'",
        answers: [
            { text: "Où que", correct: true },
            { text: "Chaque fois que", correct: false },
            { text: "Quoi que", correct: false },
            { text: "Cependant", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'aller' para as três pessoas presentes?",
        answers: [
            { text: "vais", correct: false },
            { text: "allez", correct: false },
            { text: "vont", correct: true },
            { text: "aller", correct: false }
        ]
    },
    {
        question: "Escolha o pronome pessoal correto para completar a frase : '_____ aime danser.'",
        answers: [
            { text: "Je", correct: false },
            { text: "Tu", correct: true },
            { text: "Il", correct: false },
            { text: "Nous", correct: false }
        ]
    },
    {
        question: "Qual é o pretérito do verbo 'avoir'?",
        answers: [
            { text: "ai", correct: false },
            { text: "as", correct: false },
            { text: "a", correct: false },
            { text: "eu", correct: true }
        ]
    },
    {
        question: "Escolha a palavra correta para completar a frase : 'Elle est ____ fille.'",
        answers: [
            { text: "une", correct: true },
            { text: "un", correct: false },
            { text: "le", correct: false },
            { text: "la", correct: false }
        ]
    },
    {
        question: "",
        answers: [
            { text: "parle", correct: true },
            { text: "parleras", correct: false },
            { text: "parlerez", correct: false },
            { text: "parles", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'parler' na segunda pessoa do singular no futuro simples?",
        answers: [
            { text: "as", correct: false },
            { text: "ai", correct: true },
            { text: "a", correct: false },
            { text: "avons", correct: false }
        ]
    },
    {
        question: "Escolha a palavra correta para completar a frase : 'Il a ____ pomme.'",
        answers: [
            { text: "une", correct: true },
            { text: "un", correct: false },
            { text: "le", correct: false },
            { text: "la", correct: false }
        ]
    },
    {
        question: "Qual é o pronome pessoal correto para completar a frase : '_____ aime le chocolat.'",
        answers: [
            { text: "Je", correct: true },
            { text: "Tu", correct: false },
            { text: "Il", correct: false },
            { text: "Nous", correct: false }
        ]
    }
];

// declaracoes para a chamada
let selectedQuestions;
let questions = [];

// Funcao para selecionar idioma baseado na escolha do usuario
function selectLanguage(language) {
    if (language === 'english') { 
        selectedQuestions = ingles;
    } else if (language === 'french') {
        selectedQuestions = frances;
    } else if (language === 'spanish') {
        selectedQuestions = espanhol;
    }

    questions = selectedQuestions; // As questoes serao definidas pelo idioma selecionado
    hideLanguageSelection(); // Esconder selecao de idiomas
    showQuiz();  // Mostrar o quiz
    startQuiz();  // Iniciar o quiz
}

// Inicializacao 
const questionElement = document.getElementById("pergunta"); // Elemento para mostrar a pergunta
const answerButtonsElement = document.getElementById("answer-button"); // Elemento para os botoes de resposta
const nextButton = document.getElementById("next-btn"); // Botao para proxima pergunta
const backButton = document.getElementById("back-btn"); // Botao para pergunta anterior
const progressBar = document.getElementById("progress"); // Barra de progresso
const progressText = document.getElementById("progress-text"); // Texto de progresso
const finishButton = document.getElementById("finish-btn"); // Botao para finalizar
const backButtonFinish = document.getElementById("back-question"); // Botao para voltar a pergunta
const result = document.getElementById("result"); // Elemento para mostrar o resultado
const resultText = document.getElementById("result-text"); // Texto do resultado
const ResultNivel = document.getElementById("result-nivel"); // Nivel do resultado
const restartButton = document.getElementById("restart-btn"); //Botao para reiniciar
let currentQuestionIndex = 0; // Indice da pergunta atual
let score = 0; // Pontuacao

// Funcao para esconder selecao de opcoes
function hideLanguageSelection() { 
    const selecaoDiv = document.getElementById("selecao");
    if (selecaoDiv) {
        selecaoDiv.classList.add('hide'); // Para esconder
    }
}

// Funcao para exibir quiz
function showQuiz() {
    const quizDiv = document.getElementById("quiz");
    if (quizDiv) {
        quizDiv.classList.remove('hide');
        quizDiv.classList.add('show');
    }
}

// Funcao para iniciar o quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    // Embaralhar as perguntas
    questions = selectedQuestions.map(question => ({ ...question })); // Clonar as perguntas por meio do arrow function
    questions = fisheryates(questions); // Puxa a funcao de embaralhar

    // Seleciona as primeiras 12 questoes que foram embaralhadas
    questions = questions.slice(0, 12);

    // Define o botao
    nextButton.innerHTML = "Próximo";

    showQuestion(); // Exibe a pergunta
    setNextQuestion(); // Evento para ir a proxima pergunta
    selectAnswer(); // Evento para selecionar resposta
    finishQuiz(); // Evento para finalizar quiz
}

// Funcao para embaralhar um array usando o Fisher Yates
function fisheryates(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolhe um indice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de posicao
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Exibir as perguntas
function showQuestion() {
    resetState();
    // Pegar a pergunta atual baseado no indice
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // Exibe o numero e o texto da pergunta
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //Adciona os botoes de respostas
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    // Botao voltar, se for a primeira pergunta ele fica transparente em 50%
    if (currentQuestionIndex === 0) {
        backButton.style.filter = "brightness(50%)";
    } else {
        backButton.style.filter = "brightness(100%)";
    }
    // Atualiza a barra de progresso
    progress();
}

// Evento do click pro "Proximo"
nextButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex++;
    // Exibe a proxima pergunta
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else if (currentQuestionIndex > lastQuestion) {
        currentQuestionIndex = lastQuestion;
        finishQuiz(); // Finaliza se for a ultima
    }
});
// Evento do click pro "Voltar"
backButton.addEventListener("click", () => {
    currentQuestionIndex--;
    // Exibe se tiver perguntas anteriores
    if (currentQuestionIndex >= 0) {
        showQuestion();
    } else {
        currentQuestionIndex = 0;
    }
});

// Selecionar a resposta
function selectAnswer(e) {
    // Selecao de uma resposta
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    // Atualiza o estilo do botao de resposta
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => button.classList.remove('btn-selected'));

    selectedButton.classList.add('btn-selected');

    // Soma a pontuacao
    if (correct) {
        score++;
    }

    // Libera o botao proximo
    nextButton.style.filter = "brightness(100%)";
    nextButton.disabled = false;
}

// Reinicializa antes de exibir uma nova pergunta
function resetState() {
    nextButton.style.filter = "brightness(50%)";
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Atualiza a barra de progresso do quiz
function progress() {
    const currentQuestion = currentQuestionIndex + 1;
    progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";
    progressText.innerHTML = (currentQuestionIndex + 1) + "/" + questions.length;
}

// Logica para finalizar o quiz
// Alterna a visibilidade do finish e quiz entre visivel e invisivel para poder exibir os resultados
function finishQuiz() {
    if (finish.classList.contains("hide")) {
        finish.classList.remove("hide");
        finish.classList.add("show");
    } else {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    const quiz = document.getElementById("quiz");
    if (quiz.classList.contains("show")) {
        quiz.classList.remove("show");
        quiz.classList.add("hide");
    } else {
        quiz.classList.remove("hide");
        quiz.classList.add("show");
    }
}

// Evento de clique no botao "Voltar" (tela de resultados)
backButtonFinish.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    showQuestion();
    finishQuiz();
});

// Evento de clique no botao "Finalizar"
finishButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    if (finish.classList.contains("show")) {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    resultQuiz();
});

// Logica para exibir o resultado do quiz
function resultQuiz() {
    if (result.classList.contains("hide")) {
        result.classList.remove("hide");
        result.classList.add("show");
    } else {
        result.classList.remove("show");
        result.classList.add("hide");
    }
    resultText.innerHTML = "Você acertou " + score + " de " + questions.length + " questões.";
    restartButton.style.filter = "brightness(100%)";
    resultNivel();
    resultBaar();
}

// Atualiza a barra de resultados com base na pontuacao
function resultBaar() {
    const resultBar = document.getElementById("result-bar");
    resultBar.className = '';

    const limitedScore = Math.min(12, Math.max(0, score));
    resultBar.classList.add("result-bar" + limitedScore);
}

// Funcao para mostrar o resultado baseado no score
function resultNivel() {
    const nivelText = document.getElementById("nivel-text");
    if (score <= 2) {
        ResultNivel.innerHTML = "A1";
        nivelText.innerHTML = "<strong>A1</strong> - O nivel A1 está na sessão básica, isso pode significar o início de sua caminhada.";
    }
    else if (score <= 4) {
        ResultNivel.innerHTML = "A2";
        nivelText.innerHTML = "<strong>A2</strong> - Esta é a sessão intermediária, onde você aprofundará seu conhecimento básico no idioma.";
    }
    else if (score <=6) {
        ResultNivel.innerHTML = "B1";
        nivelText.innerHTML = "<strong>B1</strong> - Ao chegar à sessão B1, você estará pronto para ampliar seu vocabulário e melhorar sua capacidade de comunicação no idioma.";
    }
    else if (score <= 8) {
        ResultNivel.innerHTML = "B2";
        nivelText.innerHTML = "<strong>B2</strong> - Bem-vindo à sessão B2, onde suas habilidades em francês atingirão um nível intermediário, permitindo que você participe de conversas mais complexas e compreenda textos mais avançados.";
    }
    else if (score <= 10) {
        ResultNivel.innerHTML = "C1";
        nivelText.innerHTML = "<strong>C1</strong> - Nesta sessão avançada (C1), você aprimorará suas habilidades para um nível avançado no idioma, permitindo a participação em discussões profundas e a compreensão de textos desafiadores.";
    }
    else if (score <= 12) {
        ResultNivel.innerHTML = "C2";
        nivelText.innerHTML = "<strong>C2</strong> - Parabéns, você chegou à sessão C2, o nível de proficiência mais alto no idioma. Aqui, você dominará a língua e poderá comunicar-se fluentemente em uma ampla gama de contextos.";
    }
}

restartButton.addEventListener("click", startQuiz);

startQuiz();