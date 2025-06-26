let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

setInterval(changeImage, 3000);  // Cambiar cada 3 segundos

