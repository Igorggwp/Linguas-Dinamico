// URL da API do Sanity para professores
const URL_PROFESSORES = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22professor%22%5D%7B%0A++%0A+++%22professor%22%3Anovo_professor%2C%0A+++++%22disciplina%22%3Adisciplina%2C%0A+++++%22imagem%22%3Aimagem_professor.asset-%3Eurl%0A+%0A%7D";

// Define a URL da API que será usada para buscar informações sobre professores.

// Usa o método fetch para fazer uma solicitação GET para a URL_PROFESSORES.
fetch(URL_PROFESSORES, { method: "GET" })
  .then((response) => {
    // Encadeamento de promessas para processar a resposta da solicitação.

    // Verifica se a resposta da API foi bem-sucedida (status 200).
    if (!response.ok) {
      throw new Error(Erro na resposta da API: ${response.status});
    }

    // Se a resposta for bem-sucedida, converte a resposta em JSON.
    return response.json();
  })
  .then((data) => {
    // Quando os dados JSON são recebidos, busca o elemento HTML com o id "professores-container".
    const professoresContainer = document.getElementById("professores-container");

    // Itera pelos dados recebidos da API (que representam informações sobre professores).
    data.result.forEach((professor) => {
      // Para cada professor, cria um "card" usando o código abaixo e o anexa ao "professoresContainer".

      const card = document.createElement("div");
      card.classList.add("box");

      const img = document.createElement("img");
      img.src = professor.imagem; // Define a fonte da imagem com base nos dados do professor.
      img.alt = professor.professor; // Define o texto alternativo da imagem com o nome do professor.

      const nome = document.createElement("div");
      nome.textContent = professor.professor; // Define o texto do elemento com o nome do professor.

      const disciplina = document.createElement("div");
      disciplina.textContent = professor.disciplina; // Define o texto do elemento com a disciplina do professor.

      card.appendChild(img);
      card.appendChild(nome);
      card.appendChild(disciplina);

      // Anexa o "card" com as informações do professor ao elemento "professoresContainer" na página.
      professoresContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Erro ao processar a requisição:", error));
