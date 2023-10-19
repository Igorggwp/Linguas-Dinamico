const URL_AVALIACOES = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D+%7B%0A++%22nota%22%3A+nota%2C%0A++%22nome%22%3A+nome%2C%0A++%22usuario%22%3A+usuario%2C%0A++%22opiniao%22%3A+opiniao%2C%0A++%22imagem_avalicao%22%3A+imagem_avalicao.asset-%3Eurl%0A%7D&perspective=published";

const avaliacoesContentElement = document.querySelector("#avaliacoes");

fetch(URL_AVALIACOES, { method: "GET" }) // Realiza um GET para a URL da API
    .then(response => response.json())
    .then(data => {
        // Cria um contêiner para as avaliações
        const testimonialBoxContainer = document.createElement("div");
        testimonialBoxContainer.classList.add("testimonial-box-container");

        // Recebe os dados das avaliações
        data.result.forEach(avaliacao => {
            
            const avaliacaoItem = document.createElement("div"); // Cria um elemento <div> para representar uma "avaliacao"
            avaliacaoItem.classList.add("testimonial-box");

            const boxTop = document.createElement("div"); // Cria a seção superior da caixa de avaliação
            boxTop.classList.add("box-top");

            const profile = document.createElement("div"); // Cria a seção do perfil do usuário
            profile.classList.add("profile");

            const profileImg = document.createElement("div"); // Cria a seção da imagem de perfil
            profileImg.classList.add("profile-img");
            const img = document.createElement("img");
            img.src = avaliacao.imagem_avalicao; 
            img.alt = "imagem usuário";
            profileImg.appendChild(img);

            const nameUser = document.createElement("div"); // Cria a seção do nome de usuário
            nameUser.classList.add("name-user");
            const strong = document.createElement("strong");
            strong.textContent = avaliacao.nome;
            const span = document.createElement("span");
            span.textContent = `@${avaliacao.usuario}`;
            
            const boxEstrela = document.createElement("div");  // Cria a seção das estrelas de avaliação
            boxEstrela.classList.add("box-estrela");

            // Converte a nota para inteiro
            const nota = parseInt(avaliacao.nota);

            // Criar as estrelas
            for (let i = 0; i < 5; i++) {
                const star = document.createElement("i");
                star.classList.add("fas", "fa-star");

                // Adiciona a classe de estrela vazias
                if (i >= nota) {
                    star.classList.add("empty-star");
                }

                boxEstrela.appendChild(star);
            }

            // Adiciona o nome de usuário e estrelas à seção superior
            nameUser.appendChild(strong);
            nameUser.appendChild(span);

            // Adiciona a imagem de perfil e o nome de usuário à seção de perfil
            profile.appendChild(profileImg);
            profile.appendChild(nameUser);

            // Adiciona a seção de perfil e estrelas à seção superior
            boxTop.appendChild(profile);
            boxTop.appendChild(boxEstrela);

            // Adiciona a seção superior à avaliação
            avaliacaoItem.appendChild(boxTop);

            // Cria a seção de comentário
            const clientComment = document.createElement("div");
            clientComment.classList.add("client-comment");
            const p = document.createElement("p");
            p.textContent = avaliacao.opiniao;

            // Adiciona o comentário à seção de comentário
            clientComment.appendChild(p);

            // Adiciona a seção de comentário
            avaliacaoItem.appendChild(clientComment);

            // Adiciona a avaliação
            testimonialBoxContainer.appendChild(avaliacaoItem);  
        });

        // Adiciona o contêiner de avaliações ao elemento de conteúdo das avaliações
        avaliacoesContentElement.appendChild(testimonialBoxContainer);  
    })
    .catch(error => console.error("Erro ao processar a requisição:", error));
