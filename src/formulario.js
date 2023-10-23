const formulario = document.getElementById('MeuFormulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cursos =  document.getElementById('cursos').value;
    const destinatario = 'cliente@gmail.com'

    console.log("teste")
    
    document.location.href = `mailto:${destinatario}?&subject= vim do site! &body= Olá sou o(a) ${nome} e gostaria de conhecer o curso de ${cursos} `;

});
