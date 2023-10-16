const URL_AVALIACOES = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D+%7B%0A++%22nota%22%3A+nota%2C%0A++%22nome%22%3A+nome%2C%0A++%22usuario%22%3A+usuario%2C%0A++%22opiniao%22%3A+opiniao%2C%0A++%22imagem_avalicao%22%3A+imagem_avalicao.asset-%3Eurl%0A%7D&perspective=published";

const avaliacoesContentElement = document.querySelector("#avaliacoes");

fetch(URL_AVALIACOES, { method: "GET" })
    .then(response => response.json())
    .then(data => {
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
            
            const boxEstrela = document.createElement("div");
            boxEstrela.classList.add("box-estrela");

            const nota = parseInt(avaliacao.nota);

            for (let i = 0; i < 5; i++) {
                const star = document.createElement("i");
                star.classList.add("fas", "fa-star");

                if (i >= nota) {
                    star.classList.add("empty-star");
                }

                boxEstrela.appendChild(star);
            }

            nameUser.appendChild(strong);
            nameUser.appendChild(span);
            nameUser.appendChild(boxEstrela);

            profile.appendChild(profileImg);
            profile.appendChild(nameUser);

            boxTop.appendChild(profile);

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
    })
    .catch(error => console.error("Erro ao processar a requisição:", error));
