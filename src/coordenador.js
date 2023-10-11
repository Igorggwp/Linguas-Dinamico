const URL_COORDENADOR = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22coordenacao%22%5D%7B%0A++%0A+++%22coordenador%22%3Acoordenacao%2C%0A+++++%22imagem%22%3Aimagem_coordenador.asset-%3Eurl%0A+%0A%7D";

const content = document.querySelector("#coordenador"); // Seleciona o elemento com id "professor"

fetch(URL_COORDENADOR, {method: "GET" }) // Realiza um GET para a URL da API
    .then(response => {
        return response.json(); // Converte para JSON
    })
    .then(data => {
        data.result.forEach(coordenacao => { // Quando é convertida processa os dados

            const imagem = document.createElement('img'); // Cria um elemento 'img' para a imagem do coordenador
            imagem.src = coordenacao.imagem;

            const nome = document.createElement('p'); // Cria um elemento 'p' para o nome
            nome.classList.add('name'); 
            nome.innerText = coordenacao.coordenador;

            const logo = document.createElement('img'); // Cria um elemento 'img' que representa a logo do Biopark
            logo.src = './assets/img/logos/biopark.png';
            logo.classList.add('biopark-logo');

            const content = document.querySelector("#coordenador");

            content.appendChild(imagem); // Adciona imagem , nome e logo ao elemento com id "coordenador"
            content.appendChild(nome);
            content.appendChild(logo);
        });
    })
    .catch(error => console.error("Erro ao processar a requisição:", error));