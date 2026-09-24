const secciones = document.querySelectorAll(
    ".introduccion, .norma, .recordatorio"
);


const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    },
    {
        threshold: 0.15
    }
);


secciones.forEach((seccion) => {

    observador.observe(seccion);

});



/* =========================
   NAVEGACIÓN
========================= */

const enlaces = document.querySelectorAll("nav a");


enlaces.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        enlaces.forEach((item) => {

            item.classList.remove("activo");

        });

        enlace.classList.add("activo");

    });

});



/* =========================
   ANIMACIÓN DEL BOTÓN
========================= */

const boton = document.querySelector(".boton");


boton.addEventListener("click", () => {

    boton.style.transform = "scale(0.97)";

    setTimeout(() => {

        boton.style.transform = "";

    }, 150);

});
