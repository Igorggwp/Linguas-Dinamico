// Definir a URL da API de cursos
const URL_CURSOS = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22curso%22%0A+%5D+%0A++%7B%0A++%22Curso%22%3Acurso%2C%0A+%7D";

// Selecionar o elemento HTML com a classe "description"
const description = document.querySelector("p.description");
var cursos = "";

// Selecionar o elemento HTML com a classe "cursosFooter"
const footer = document.querySelector("ul.cursosFooter")
var fragmento = document.createDocumentFragment();

// Selecionar o elemento HTML com o id "cursos"
const seletor = document.querySelector("select#cursos")

// Realizar uma solicitação GET para a URL da API
fetch(URL_CURSOS, {
    method: "GET",
})
    .then(result => result.json()) // Converter a resposta em JSON
    .then(({ result }) => {
        result.forEach(task => {
            // Construir uma string "cursos" com os cursos obtidos
            cursos = cursos.concat("• ", task.Curso, "<br>");

            // Criar um elemento <li> para a lista de cursos no rodapé
            var li = document.createElement('li');
            var cursosFooter = document.createElement("a");
            cursosFooter.textContent = task.Curso; // Definir o texto do link
            cursosFooter.setAttribute("href", "#"); // Definir o atributo href
            li.appendChild(cursosFooter); // Adicionar o link ao elemento <li>
            fragmento.appendChild(li); // Adicionar o elemento <li> ao fragmento

            // Criar uma opção para o elemento de seleção (dropdown)
            var opcao = document.createElement("option");
            opcao.setAttribute("value", task.Curso); // Definir o valor da opção
            opcao.innerText = task.Curso; // Definir o texto da opção
            seletor.appendChild(opcao); // Adicionar a opção ao elemento de seleção
        });

        // Adicionar o fragmento à lista no rodapé
        footer.appendChild(fragmento);

        // Preencher o elemento "description" com a string de cursos
        description.innerHTML = cursos;
    })
    .catch(console.error); // Lidar com erros, se ocorrerem
