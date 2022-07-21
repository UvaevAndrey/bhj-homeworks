let menulink = Array.from(document.getElementsByClassName('menu__link'));

menulink.forEach(element => {
    let sub = element.parentElement.querySelector('.menu_sub')
    if ( sub!==null) {
        element.onclick = function() {
            let newClass = changer(sub.getAttribute('class'));
            sub.setAttribute('class',newClass);  
            return false
        }           
    }

});

function changer (name) {
    if (name === 'menu menu_sub') return 'menu menu_sub menu_active';
    else if (name === 'menu menu_sub menu_active') return 'menu menu_sub';
}