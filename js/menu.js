document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle"); // Selecciona el botón
    const menu = document.querySelector(".menu"); // Selecciona el menú

    // Evento para alternar el estado del menú
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active"); // Cambia el estado del botón
        menu.classList.toggle("active"); // Muestra u oculta el menú
    });

    // Opcional: Cierra el menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll(".menu li a");
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });
});
