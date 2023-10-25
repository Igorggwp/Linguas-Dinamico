const API_URLS = {
    ingles: "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22perguntasIN%22%5D%7B%0A++pergunta%2C%0A++respostas%5B%5D%7B%0A++++texto%2C%0A++++correta%0A++%7D%0A%7D&perspective=published",
    espanhol: "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22perguntasES%22%5D%7B%0A++pergunta%2C%0A++respostas%5B%5D%7B%0A++++texto%2C%0A++++correta%0A++%7D%0A%7D&perspective=published",
    frances: "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22perguntasFR%22%5D%7B%0A++pergunta%2C%0A++respostas%5B%5D%7B%0A++++texto%2C%0A++++correta%0A++%7D%0A%7D&perspective=published",
};

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Funcao para buscar perguntas na API
function fetchQuestions(language) {
    const apiUrl = API_URLS[language];

    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na solicitação da API.");
            }
            return response.json();
        })
        .then((data) => {
            if (data && data.result && data.result.length > 0) {
                selectedQuestions = data.result; // Armazena as perguntas na var selectedQuestions
                hideLanguageSelection();
                showQuiz();
                startQuiz();
            } else {
                console.error("Nenhuma pergunta encontrada na API.");
            }
            return data;
        })
        .catch((error) => {
            console.error("Erro ao buscar as perguntas:", error);
            throw error;
        });
}

// Funcao para selecionar idioma
function startQuizWithLanguage(language) {
    fetchQuestions(language)
        .then((data) => {
            selectedQuestions = data.result;
            hideLanguageSelection();
            showQuiz();
            startQuiz();
        })
        .catch((error) => {
            console.error("Erro ao buscar as perguntas (starQuizWithLanguage):", error);
        });
}

// Inicializacao
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
const finish = document.getElementById("finish");
result.classList.add("hide");
finish.classList.add("hide");

document.getElementById("english").addEventListener("click", () => {
    startQuizWithLanguage("ingles"); // Inicia o quiz
});
document.getElementById("spanish").addEventListener("click", () => {
    startQuizWithLanguage("espanhol"); // Inicia o quiz
});
document.getElementById("french").addEventListener("click", () => {
    startQuizWithLanguage("frances"); // Inicia o quiz
});

// Funcao para esconder selecao de opcoes
function hideLanguageSelection() {
    const selecaoDiv = document.getElementById("selecao");
    if (selecaoDiv) {
        selecaoDiv.classList.add('hide');
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
    selectedQuestions = shuffleQuestions(selectedQuestions);
    showQuestion();
}

// Funcao para embaralhar 
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

// Exibir as perguntas
function showQuestion() {
    resetState();
    if (currentQuestionIndex < selectedQuestions.length) {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.pergunta;

        // Embaralhe as respostas
        const shuffledAnswers = shuffleQuestions([...currentQuestion.respostas]);
        
        shuffledAnswers.forEach((resposta, index) => {
            const button = document.createElement("button");
            button.textContent = resposta.texto;
            button.classList.add('btn');
            button.dataset.correct = resposta.correta; // Armazene a correção no dataset
            button.addEventListener("click", () => selectAnswer(button.dataset.correct));
            answerButtonsElement.appendChild(button);
        });
        
        // Transparencia do botao
        if (currentQuestionIndex === 0) {
            backButton.style.filter = "brightness(50%)";
        } else {
            backButton.style.filter = "brightness(100%)";
        }
        progress(); // Atualiza a barra de progresso
    }
}

// Evento do click pro "Proximo"
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    // Exibe a proxima pergunta
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else if (currentQuestionIndex >= selectedQuestions.length) {
        currentQuestionIndex = selectedQuestions.length - 1;
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
function selectAnswer(correct) {
    const selectedButton = event.target;
    const isCorrect = correct === "true" || correct === true;

    if (isCorrect) {
        score++;
    }

    // Remova a classe 'btn-selected' de todos os botões
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach((button) => {
        button.classList.remove('btn-selected');
    });

    // Adicione a classe 'btn-selected' apenas à resposta selecionada
    selectedButton.classList.add('btn-selected');

    // Ative o botão 'Próxima' para avançar para a próxima pergunta
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
    progressBar.style.width = (currentQuestion / selectedQuestions.length) * 100 + "%";
    progressText.textContent = `${currentQuestion}/${selectedQuestions.length}`;
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
    const lastQuestion = selectedQuestions.length - 1;
    currentQuestionIndex = lastQuestion;
    showQuestion();
    finishQuiz();
});

// Evento de clique no botao "Finalizar"
finishButton.addEventListener("click", () => {
    const lastQuestion = selectedQuestions.length - 1;
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
    resultText.textContent = `Você acertou ${score} de ${selectedQuestions.length} questões.`;
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
        ResultNivel.textContent = "A1";
        nivelText.textContent = "O nível A1 está na sessão básica, isso pode significar o início de sua jornada.";
    } else if (score <= 4) {
        ResultNivel.textContent = "A2";
        nivelText.textContent = "Esta é a sessão intermediária, onde você aprofundará seu conhecimento básico no idioma.";
    } else if (score <= 6) {
        ResultNivel.textContent = "B1";
        nivelText.textContent = "Ao chegar à sessão B1, você estará pronto para expandir seu vocabulário e melhorar sua capacidade de comunicação no idioma.";
    } else if (score <= 8) {
        ResultNivel.textContent = "B2";
        nivelText.textContent = "Bem-vindo à sessão B2, onde suas habilidades em francês atingirão um nível intermediário, permitindo que você participe de conversas mais complexas e compreenda textos mais avançados.";
    } else if (score <= 10) {
        ResultNivel.textContent = "C1";
        nivelText.textContent = "Nesta sessão avançada (C1), você aprimorará suas habilidades para um nível avançado no idioma, permitindo a participação em discussões profundas e a compreensão de textos desafiadores.";
    } else if (score <= 12) {
        ResultNivel.textContent = "C2";
        nivelText.textContent = "Parabéns, você chegou à sessão C2, o nível de proficiência mais alto no idioma. Aqui, você dominará a língua e poderá comunicar-se fluentemente em uma ampla gama de contextos.";
    }
}

restartButton.addEventListener("click", () => {
    startQuiz();
});