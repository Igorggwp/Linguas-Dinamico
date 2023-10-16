const URL_PROFESSORES = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%22professor%22%5D{%22professor%22:novo_professor,%22disciplina%22:disciplina,%22imagem%22:imagem_professor.asset->url}"

const professoresContainer = document.getElementById("professores");

fetch(URL_PROFESSORES, { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.result.forEach((professor) => {
      const professorCard = createProfessorCard(professor);
      professoresContainer.appendChild(professorCard);
    });
  })
  .catch((error) => console.error("Erro ao processar a requisição:", error));

function createProfessorCard(professor) {
  const card = document.createElement("div");
  card.classList.add("professor-card");

  const imagem = document.createElement("img");
  imagem.src = professor.imagem;

  const nome = document.createElement("p");
  nome.classList.add("name");
  nome.innerText = professor.professor;

  const disciplina = document.createElement("p");
  disciplina.innerText = professor.disciplina;

  card.appendChild(imagem);
  card.appendChild(nome);
  card.appendChild(disciplina);

  return card;
}
