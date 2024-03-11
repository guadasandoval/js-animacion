let emptyElement = document.querySelector('.about .empty')
let titleElement = document.querySelector('.about .title')
let figureElement = document.querySelectorAll('figure')
let imgLogo = document.querySelectorAll('.logo')
let formElement = document.getElementById('forma-desing')
let index = 0

window.addEventListener('mousemove', handleMouseMove)

function handleMouseMove(event){
    emptyElement.style.flexBasis = event.clientX + 'px'
    titleElement.style.flexBasis = event.clientY/2 + 'px'

    figureElement.forEach(element => {
        element.style.flexBasis = (window.innerWidth - event.clientX) + 'px'
    })
}

function fadeNext() {
    imgLogo[index].style.opacity = "0";

    index = (index + 1) % imgLogo.length;
    setTimeout(function() {
        imgLogo[index].style.opacity = "1";
    }, 500);
  }
  fadeNext();
  setInterval(fadeNext, 2000);

  function crearFigura(event) {
    const contenedor = document.getElementById('contenedor');
    
    const rect = contenedor.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const nuevaFigura = document.createElement('img');
    nuevaFigura.src = './images/e.svg';
    nuevaFigura.classList.add('figura');

    const maxWidth = contenedor.clientWidth - nuevaFigura.offsetWidth;
    const maxHeight = contenedor.clientHeight - nuevaFigura.offsetHeight;
    const leftPosition = Math.min(Math.max(offsetX - nuevaFigura.offsetWidth / 2, 0), maxWidth);
    const topPosition = Math.min(Math.max(offsetY - nuevaFigura.offsetHeight / 2, 0), maxHeight);
    
    nuevaFigura.style.left = leftPosition + 'px';
    nuevaFigura.style.top = topPosition + 'px';

    contenedor.appendChild(nuevaFigura);
} 