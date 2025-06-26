// Inicializar el índice de la imagen que se muestra en el slider de proyectos
let slideIndex = 0;

// Función para mover el slider hacia adelante o atrás
function moveSlide(step) {
    let slides = document.getElementsByClassName("slider-item");
    slideIndex += step;
    
    // Si el índice se pasa del número de slides, se vuelve a iniciar
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Ocultar todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostrar la imagen correspondiente
    slides[slideIndex].style.display = "block";
}

// Inicializar el slider y mostrar la primera imagen
moveSlide(0);

// Configuración para el slider automático (cambia cada 5 segundos)
setInterval(function() {
    moveSlide(1);  // Mueve una imagen hacia adelante cada 5 segundos
}, 5000);

// Función para manejar el fondo rotativo de la página de inicio
let currentIndex = 0;
const backgrounds = [
    'images/fondo1.png',
    'images/fondo2.png',
    'images/fondo3.png',
    'images/fondo4.png'
];

// Función que cambia el fondo cada cierto tiempo
function changeBackground() {
    document.getElementById('bienvenida').style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Iniciar el cambio de fondo cada 5 segundos
setInterval(changeBackground, 5000);

// Asegurarse de que el fondo inicial se muestre al cargar la página
changeBackground();
