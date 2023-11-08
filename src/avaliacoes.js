const URL_AVALIACOES = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D+%7B%0A++%22nota%22%3A+nota%2C%0A++%22nome%22%3A+nome%2C%0A++%22usuario%22%3A+usuario%2C%0A++%22opiniao%22%3A+opiniao%2C%0A++%22imagem_avalicao%22%3A+imagem_avalicao.asset-%3Eurl%0A%7D&perspective=published";

const avaliacoesContentElement = document.querySelector("#avaliacoes");

async function fetchAvaliacoes() {
  try {
    const response = await fetch(URL_AVALIACOES, { method: "GET" });
    const data = await response.json();

    const testimonialBoxContainer = document.createElement("div");
    testimonialBoxContainer.classList.add("testimonial-box-container");

    data.result.forEach(avaliacao => {
      const avaliacaoItem = document.createElement("div");
      avaliacaoItem.classList.add("testimonial-box");

      const boxTop = document.createElement("div");
      boxTop.classList.add("box-top");

      const profile = document.createElement("div");
      profile.classList.add("profile");

      const profileImg = document.createElement("div");
      profileImg.classList.add("profile-img");
      const img = document.createElement("img");
      img.src = avaliacao.imagem_avalicao;
      img.alt = "imagem usuário";
      profileImg.appendChild(img);

      const nameUser = document.createElement("div");
      nameUser.classList.add("name-user");
      const strong = document.createElement("strong");
      strong.textContent = avaliacao.nome;
      const span = document.createElement("span");
      span.textContent = `@${avaliacao.usuario}`;

      const boxEstrela = createStarRating(avaliacao.nota);

      nameUser.appendChild(strong);
      nameUser.appendChild(span);

      profile.appendChild(profileImg);
      profile.appendChild(nameUser);

      boxTop.appendChild(profile);
      boxTop.appendChild(boxEstrela);

      avaliacaoItem.appendChild(boxTop);

      const clientComment = document.createElement("div");
      clientComment.classList.add("client-comment");
      const p = document.createElement("p");
      p.textContent = avaliacao.opiniao;

      clientComment.appendChild(p);

      avaliacaoItem.appendChild(clientComment);

      testimonialBoxContainer.appendChild(avaliacaoItem);
    });

    avaliacoesContentElement.appendChild(testimonialBoxContainer);
  } catch (error) {
    console.error(error);
  }
}

function createStarRating(nota) {
    const boxEstrelaDiv = document.createElement("div");
    boxEstrelaDiv.classList.add("box-estrela");
    
    const notaInteira = Math.floor(nota);
    const temMeiaEstrela = nota % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("i");
        star.className = "fas fa-star";
        
        if (i <= notaInteira) {
            star.className += " full-star"; // Estrela cheia
        } else if (i === notaInteira + 1 && temMeiaEstrela) {
            star.className += " half-star"; // Estrela pela metade
        } else {
            star.className = "far fa-star"; // Estrela vazia
        }
        
        boxEstrelaDiv.appendChild(star);
    }
    
    return boxEstrelaDiv;
}

fetchAvaliacoes();