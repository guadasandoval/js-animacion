let emptyElement = document.querySelector('.about .empty')
let titleElement = document.querySelector('.about .title')
let figureElement = document.querySelectorAll('figure')

window.addEventListener('mousemove', handleMouseMove)

function handleMouseMove(event){
    emptyElement.style.flexBasis = event.clientX + 'px'
    titleElement.style.flexBasis = event.clientY/2 + 'px'

    figureElement.forEach(element => {
        element.style.flexBasis = (window.innerWidth - event.clientX) + 'px'
    })
}