const URL_CURSOS = "https://lvdt20mj.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22curso%22%0A+%5D+%0A++%7B%0A++%22Curso%22%3Acurso%2C%0A+%7D";

        const description = document.querySelector("p.description");
        const footer = document.querySelector("ul.cursosFooter")
        var cursos = "";
        var fragmento = document.createDocumentFragment();

        fetch(URL_CURSOS, {
            method: "GET",
        })
            .then(result => result.json())
            .then(({ result }) => {
                result.forEach(task => {
                    cursos = cursos.concat("• ",task.Curso, "<br>");

                    
                    var li = document.createElement('li');
                    var cursosFooter = document.createElement("a");
                    cursosFooter.textContent = task.Curso; // Correção aqui
                    cursosFooter.setAttribute("href", "#");
                    li.appendChild(cursosFooter);
                    fragmento.appendChild(li);
                    
                });
                footer.appendChild(fragmento);
                description.innerHTML = cursos;
            })
            .catch(console.error);