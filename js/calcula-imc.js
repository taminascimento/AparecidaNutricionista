var titulo = document.querySelector(".titulo"); 
titulo.textContent = "Aparecida Nutricionista"; 
/*Tudo que for alterado no documet será alterado na exibição para o usuário/
O querySelector usada para especificar que queremos trazer apenas uma parte do HTML (exibe tudo o que está dentro dessa parte/tag), enquanto o textContent imprime apenas o texto */
/*
var paciente = document.querySelector("#primeiro-paciente"); //Tr que eu quero pegar a info

var tdPeso = paciente.querySelector(".info-peso"); //buscando o peso do pct,tr completa
var peso = tdPeso.textContent; // vai me dar apenas o peso do pct, sem a tr

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

/*console.log(paciente);
console.log(tdPeso);
console.log(peso);*/
/*
var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura); 

tdImc.textContent = imc;
console.log(imc);
*/



/*
// Colocando o If para evitar valores inválidos na tabela
//Ainda buscando apenas no primeiro pact, pq não tirei o id
var paciente = document.querySelector("#primeiro-paciente"); 

var tdPeso = paciente.querySelector(".info-peso"); 
var peso = tdPeso.textContent; 

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
*/



//usando o If para evidar valores inválidos
//usando querySelectorAll para buscar todos os pacientes
//usando loop For para passar por todos os pacientes

var pacientes = document.querySelectorAll(".paciente"); 

//length = pecorre toda a lista
for(var i = 0; i < pacientes.length ; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); 
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent; 
    var altura = tdAltura.textContent;
   
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } 
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
     if(altura >= 0 && altura <= 3.0){
        return true;
     } else{
        return false;
     }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura)
    
    return imc.toFixed(2);
}

























