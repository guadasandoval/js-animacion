let emptyElement = document.querySelector('.about .empty')
let titleElement = document.querySelector('.about .title')
let figureElement = document.querySelectorAll('figure')
let imgLogo = document.querySelectorAll('.logo')
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