let dead = document.getElementById ("dead")
let lost = document.getElementById ("lost")

for (let index = 1; index <= 9; index++) {
 
	function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	}
	
	let hole = getHole (index);
  
	hole.onclick = function() {
		let a=dead.textContent
		let b=lost.textContent
		if (hole.className.includes("hole_has-mole") === true) {
			a=dead.textContent++;
		} else {
			b=lost.textContent++;
		} if (a === 9) {            // если поставить 10 то по факту надо сделать 11 кликов 
			alert ("Вы победили!");
			dead.textContent = 0;
			lost.textContent = 0;
		} else if (b === 4) {      
			alert ("Вы проиграли");
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}

	
}