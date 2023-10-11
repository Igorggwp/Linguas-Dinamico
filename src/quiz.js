const englishQuestions = [
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
    }
];
const spanishQuestions = [
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
    }
];
const frenchQuestions = [
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
    }
];

let selectedQuestions;
let questions = [];

function selectLanguage(language) {
    if (language === 'english') {
        selectedQuestions = englishQuestions;
    } else if (language === 'french') {
        selectedQuestions = frenchQuestions;
    } else if (language === 'spanish') {
        selectedQuestions = spanishQuestions;
    } else {
        console.error('Invalid language choice.');
        return;
    }

    questions = selectedQuestions;
    hideLanguageSelection();
    showQuiz();  // Mostrar o quiz
    startQuiz();  // Iniciar o quiz
}

const questionElement = document.getElementById("pergunta");
const answerButtonsElement = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const finishButton = document.getElementById("finish-btn");
const backButtonFinish = document.getElementById("back-question");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
const ResultNivel = document.getElementById("result-nivel");
const restartButton = document.getElementById("restart-btn");
let currentQuestionIndex = 0;
let score = 0;

function hideLanguageSelection() {
    const selecaoDiv = document.getElementById("selecao");
    if (selecaoDiv) {
        selecaoDiv.classList.add('hide');
    }
}

function showQuiz() {
    const quizDiv = document.getElementById("quiz");
    if (quizDiv) {
        quizDiv.classList.remove('hide');
        quizDiv.classList.add('show');
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
    setNextQuestion();
    selectAnswer();
    finishQuiz();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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

    if (currentQuestionIndex === 0) {
        backButton.style.filter = "brightness(50%)";
    } else {
        backButton.style.filter = "brightness(100%)";
    }

    progress();
}

nextButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else if (currentQuestionIndex > lastQuestion) {
        currentQuestionIndex = lastQuestion;
        finishQuiz();
    }
});

backButton.addEventListener("click", () => {
    currentQuestionIndex--;

    if (currentQuestionIndex >= 0) {
        showQuestion();
    } else {
        currentQuestionIndex = 0;
    }
});

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => button.classList.remove('btn-selected'));

    selectedButton.classList.add('btn-selected');

    if (correct) {
        score++;
    }

    nextButton.style.filter = "brightness(100%)";
    nextButton.disabled = false;
}

function resetState() {
    nextButton.style.filter = "brightness(50%)";
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function progress() {
    const currentQuestion = currentQuestionIndex + 1;
    progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";
    progressText.innerHTML = (currentQuestionIndex + 1) + "/" + questions.length;
}

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

backButtonFinish.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    showQuestion();
    finishQuiz();
});

finishButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    if (finish.classList.contains("show")) {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    resultQuiz();
});

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

function resultBaar() {
    const resultBar = document.getElementById("result-bar");
    resultBar.className = '';

    const limitedScore = Math.min(12, Math.max(0, score));
    resultBar.classList.add("result-bar" + limitedScore);
}

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