const addText = function(){
    const timer = document.getElementById("timer");
    let e=timer.textContent -= 1;
    if(e < 0) {
        clearInterval (timerId)
        alert ("«Вы победили в конкурсе!»") 
    }
}
let timerId = null 
timerId = setInterval(addText, 1000)
