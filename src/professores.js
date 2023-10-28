const URL_PROFESSORES = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22professor%22%5D%7B%0A++%0A+++%22professor%22%3Anovo_professor%2C%0A+++++%22disciplina%22%3Adisciplina%2C%0A+++++%22imagem%22%3Aimagem_professor.asset-%3Eurl%0A+%0A%7D";

fetch(URL_PROFESSORES, { method: "GET" }) // Realiza um GET para a URL da API
  .then((response) => {

    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status}`);
    }
    return response.json();

  })
  .then((data) => { 
  
    const professoresContainer = document.getElementById("caixas"); // Busca o elemento com o id "professores-container".

    data.result.forEach((professor) => {

      const card = document.createElement("div"); // Cria um elemento <div> para representar um "card"
      card.classList.add("box");

      const imgProf = document.createElement("div"); // Cria um elemento <div> img
      imgProf.classList.add("prof-img");
      const img = document.createElement("img");
      img.src = professor.imagem;  
      img.alt = professor.professor; 
      imgProf.appendChild(img);

      const nome = document.createElement("p");
      nome.textContent = professor.professor; // Define o texto do elemento com o nome do professor.

      const disciplina = document.createElement("div");
      disciplina.textContent = professor.disciplina; // Define o texto do elemento com a disciplina do professor.

      card.appendChild(imgProf); // Adciona itens ao card do Professor
      card.appendChild(nome);
      card.appendChild(disciplina);

      professoresContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Erro ao processar a requisição:", error));
