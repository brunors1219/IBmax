
window.sr = ScrollReveal({reset:true})

sr.reveal('.area-1',{ duration: 1000});

sr.reveal('.area-2',{
    rotate:{ x:0, y:80, z:0},
    duration:2000
});

sr.reveal('.area-3',{
    rotate:{ x:100, y:100, z:0},
    duration:2000
});

/**********Formulário Modal**********/
//Traz o modal
var modal = document.getElementById("myModal");

//Traz o botão que abre o modal
var btn = document.getElementById("myBtn");

//Traz o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

//Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block"
}

//Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

//Quando o usuário clicar em qualquer lugar fora do modal, vai fechá-lo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }