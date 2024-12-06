function cambiarVideo(videoId) {
    const iframe = document.getElementById('youtubeVideo');
    iframe.src = `https://www.youtube.com/embed/${Nz1UfDWmuGc}`;
}
cambiarVideo('nueva_VIDEO_ID');
window.addEventListener('resize', function() {
    let width = window.innerWidth;
  
    if (width < 768) {
      document.body.style.backgroundColor = 'lightcoral';
    } else {
      document.body.style.backgroundColor = 'lightblue';
    }
  });
  function manejarVisibilidadMenu() {
    const menu = document.getElementById('menu');
    
    if (window.innerWidth < 600) {
      menu.style.display = 'none'; 
    } else {
      menu.style.display = 'block';
    }
  }
  
  window.addEventListener('resize', manejarVisibilidadMenu);
  window.addEventListener('load', manejarVisibilidadMenu);
  const mensaje = document.getElementById('mensaje');

function actualizarContenido() {
  if (window.innerWidth < 480) {
    mensaje.textContent = 'Versión móvil';
  } else {
    mensaje.textContent = 'Versión de escritorio';
  }
}

window.addEventListener('resize', actualizarContenido);
window.addEventListener('load', actualizarContenido);
function cargarEstilosDinamicos() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
  
    if (window.innerWidth < 768) {
      link.href = 'estilos-mobile.css';
    } else {
      link.href = 'estilos-desktop.css';
    }
    
    document.head.appendChild(link);
  }
  
  cargarEstilosDinamicos();