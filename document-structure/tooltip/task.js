let links = document.querySelectorAll('.has-tooltip')
links.forEach(element => {
    element.addEventListener('click',(event) => hintToggle(event,element))  
});
let hint = document.createElement('div')
hint.setAttribute('class','tooltip')
document.querySelector('body').appendChild(hint);

function getCoords(element) {
    let box = element.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

function hintToggle(event,element) {

    hint.textContent = element.getAttribute('title');
    let hintCoor = getCoords(element)
    let hintCoordLeft = hintCoor.left;
    let hintCoordBottom = hintCoor.bottom;
    hint.setAttribute('style',`left: ${hintCoordLeft}px; top: ${hintCoordBottom}px`);
    hint.style.position = 'absolute';
    hint.classList.toggle('tooltip_active');
    
    event.preventDefault();
    return false;
}