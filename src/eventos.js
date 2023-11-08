const URL_EVENTOS = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22eventos%22%5D%7B%0A%0A++%22imagem_evento%22%3A+imagem_evento.asset-%3Eurl%2C%0A++++%22link_evento%22%3A+link_evento%2C%0A++++%22nome_evento%22%3A+nome_evento%2C%0A%7D";

fetch(URL_EVENTOS, { method: "GET" }) // Realiza uma solicitação GET para a URL da API
    .then(response => response.json())
    .then(data => {
        const eventosContainer = document.querySelector('.eventos'); 

        data.result.forEach(evento => { 
            // Cria um elemento 'a' (link) para cada evento
            const linkElement = document.createElement('a');
            linkElement.href = evento.link_evento; 
            linkElement.target = '_blank'; 

            // Cria um elemento 'img' (imagem) para cada evento
            const imgElement = document.createElement('img');
            imgElement.src = evento.imagem_evento; 
            imgElement.alt = evento.nome_evento; 

            // Anexa a imagem ao link e o link ao contêiner de eventos
            linkElement.appendChild(imgElement);
            eventosContainer.appendChild(linkElement);
        });
    })
    .catch(console.error);