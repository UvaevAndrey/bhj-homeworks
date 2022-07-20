let elm = document.getElementsByClassName("menu__link");
let firstElement = elm.item(0);
parent = firstElement.closest("ul");

console.log(parent);

parent.onclick = function() {
    console.log (parent)
    parent.className = "menu menu_sub menu_active"
}