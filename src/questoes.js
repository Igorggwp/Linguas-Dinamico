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