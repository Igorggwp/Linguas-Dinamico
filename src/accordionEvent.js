window.addEventListener("load", () => {
    const intervalId = setInterval(() => { // verificar a presença dos elementos .accordion
        const answers = document.querySelectorAll(".accordion");// Selecione os que têm a classe "accordion"
        if (answers.length > 0) { // Verifica se tem elemento .accordion
            answers.forEach(event => {
                event.addEventListener("click", () => {
                    event.classList.toggle("active");
                });
            });
            clearInterval(intervalId); 
        }
    }, 100);
});