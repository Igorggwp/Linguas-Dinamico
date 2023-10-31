const URL_FAQ = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22faq%22%5D%7B%0A++pergunta%2C+resposta%0A%7D&perspective=published";

const contentElement = document.querySelector("#faq"); // Seleciona o elemento com id "faq"

fetch(URL_FAQ, {method: "GET" }) // Realiza um GET para a URL da API
.then(response => response.json())
    .then(data => {
        data.result.forEach(faq => { // Quando é convertida processa os dados

            const layout = document.querySelector('.layout'); // Seleciona o elemento com classe "layout"

            const faqItem = document.createElement("div"); // Cria um elemento <div> para representar um "item"
            faqItem.classList.add("accordion");
            faqItem.addEventListener("click", function() {
                this.classList.toggle("active");
            });

            const pergunta = document.createElement("div"); // Cria um elemento <div> para representar a pergunta
            pergunta.classList.add("accordion__question");
            pergunta.innerText = `${faq.pergunta}`; // Insere a pergunta 

            const resposta = document.createElement("div"); // Cria um elemento <div> para representar a resposta
            resposta.classList.add("accordion__answer");
            resposta.innerText = `+ ${faq.resposta}`; // Insere a resposta

            faqItem.appendChild(pergunta); // Adciona pergunta e resposta ao item do FAQ
            faqItem.appendChild(resposta);

            layout.appendChild(faqItem); // Adciona o item do FAQ ao layout
            contentElement.appendChild(layout); //Adciona o layout ao conteudo do FAQ
        });
    })
    .catch(console.error);