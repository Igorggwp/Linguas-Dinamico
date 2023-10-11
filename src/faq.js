const URL = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22faq%22%5D%7B%0A++pergunta%2C+resposta%0A%7D&perspective=published";

const content = document.querySelector("#faq"); // Seleciona o elemento com id "faq"

fetch(URL, {method: "GET" }) // Realiza um GET para a URL da API
    .then(response => {
        return response.json(); // Converte para JSON
    })
    .then(data => {
        data.result.forEach(faq => { // Quando é convertida processa os dados

            const layout = document.querySelector('.layout'); // Seleciona o elemento com classe "layout"

            const faqItem = document.createElement("div"); // Cria um elemento <div> para representar um "item"
            faqItem.classList.add("accordion");

            const pergunta = document.createElement("div"); // Cria um elemento <div> para representar a pergunta
            pergunta.classList.add("accordion__question");
            pergunta.innerHTML = `<p>+ ${faq.pergunta}</p>`; // Insere a pergunta dentro da <div>

            const resposta = document.createElement("div"); // Cria um elemento <div> para representar a resposta
            resposta.classList.add("accordion__answer");
            resposta.innerHTML = `<p>+ ${faq.resposta}</p>`; // Insere a resposta dentro da <div>

            faqItem.appendChild(pergunta); // Adciona pergunta e resposta ao item do FAQ
            faqItem.appendChild(resposta);

            layout.appendChild(faqItem); // Adciona o item do FAQ ao layout
            content.appendChild(layout); //Adciona o layout ao conteudo do FAQ
        });
    })
    .catch(error => console.error("Erro ao processar a requisição:", error));