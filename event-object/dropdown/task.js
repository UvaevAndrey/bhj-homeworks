let menu = document.querySelector('.dropdown');
let allmenu = menu.querySelectorAll('.dropdown__link')

menu.addEventListener('click',activeMenuClick);

function activeMenuClick(event) {  
    if (menu.querySelector('.dropdown__list').getAttribute('class')==='dropdown__list') {
        menu.querySelector('.dropdown__list').setAttribute('class','dropdown__list dropdown__list_active');
    }

    else if (menu.querySelector('.dropdown__list').getAttribute('class')==='dropdown__list dropdown__list_active') {
        menu.querySelector('.dropdown__list').setAttribute('class','dropdown__list');
    }
    event.preventDefault();
    return false;
}

allmenu.forEach(element => {
    element.addEventListener('click',dropDownMenuCheck)
});

function dropDownMenuCheck(event) {
    let checkedMenu = this.innerText;
    menu.querySelector('.dropdown__value').textContent = checkedMenu;
    event.preventDefault(); 
}