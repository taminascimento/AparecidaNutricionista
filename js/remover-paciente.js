var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {   //setTimeout: função de tempo. Usada para aguardar um tempo
        event.target.parentNode.remove();
    }, 500);  // tempo de espera

    //console.log(event.target); // target = alvo do evento ou quem sofreu o evento
    //var alvoEvento = event.target;
   // var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
   // paiDoAlvo.remove();

    // tb poderiamos usar assim:
    //event.target.parentNode.remove();
    // após tabela.addEventListener
});


/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() { //dblclick = duplo click
        this.remove(); // this: quem acionou o evento ou a quem ele está atrelado. Nesse caso, ao pct
    });
});
*/





