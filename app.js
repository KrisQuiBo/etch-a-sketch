const containerDiv = document.querySelector(".container");
let numberSquares = 256;
let div;

for(let i = 0; i < numberSquares; i++) {
div = document.createElement("div");
containerDiv.appendChild(div);
if(div) {
    div.classList.add('pixel');
}
}

containerDiv.addEventListener('mouseover', function(e) { 
    console.log(e.target)
    e.target.style.backgroundColor = 'pink';
})



