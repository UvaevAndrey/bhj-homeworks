let click = document.getElementById("cookie")
click.onclick = function(){
    const counter = document.getElementById("clicker__counter");
    let e=counter.textContent ++;
    if (e % 2 === 0) {
      click.width = 100;
    } else click.width = 200;
    
}
