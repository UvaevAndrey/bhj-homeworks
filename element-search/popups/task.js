let show = document.getElementById('modal_main'); 
let success = document.getElementById('modal_success');
let buttonSuccess = document.querySelector('.btn_danger');
show.setAttribute('class','modal modal_active');

let modalclose = (document.querySelectorAll('.modal__close_times'));
modalclose.forEach(element => {
    element.onclick = () => {
        show.setAttribute('class','modal modal__close');
        success.setAttribute('class','modal modal__close');
    }
});

buttonSuccess.onclick = function() {
    show.setAttribute('class','modal modal__close');
    success.setAttribute('class','modal modal_active');
    return false;
}