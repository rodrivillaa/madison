
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
    menu.style.display = 'none';
    } else {
    menu.style.display = 'block';
    }
}

var carouselSlide = document.querySelector('.carousel-slide');
    var images = carouselSlide.getElementsByTagName('img');
    var imageIndex = 0;

    function carousel() {
      imageIndex = (imageIndex + 1) % images.length;
      carouselSlide.style.transform = 'translateX(-' + (imageIndex * 100) + '%)';
    }

    setInterval(carousel, 3000); // Cambiar de imagen cada 3 segundos

    
    
    
    function cambiarImagen(nuevaImagen) {
      var imagen = document.getElementById("miImagen");
      imagen.src = nuevaImagen;
      }
      
      function restaurarImagen(imagenOriginal) {
      
      
      var imagen = document.getElementById("miImagen");
      imagen.
      
      src = imagenOriginal;
      }