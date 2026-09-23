// Animación sencilla al aparecer las secciones

const secciones = document.querySelectorAll(
    ".introduccion, .norma, .recordatorio"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {
    threshold: 0.15
});


secciones.forEach((seccion) => {

    observador.observe(seccion);

});


// Agregar el efecto de aparición

const estilo = document.createElement("style");

estilo.innerHTML = `
    .introduccion,
    .norma,
    .recordatorio {
        opacity: 0;
        transform: translateY(25px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .mostrar {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(estilo);