/*
//Escutador de eventos. Eventos: ação de usuário na tela ex. clique em algo
//exemplo de função nomeada
titulo.addEventListener("click" , mostraMensagem); 

//função nomeada
function mostraMensagem(){                  
    console.log("Olá, eu fui clicado!");
}

// exemplo de função anônima
titulo.addEventListener("click" , function){
    console.log();
}; 
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(Event){
        Event.preventDefault(); //evita o comportamento padrão dos usuários do browser
       // console.log("Oi, eu sou um botão e fui clicado!");

        var form = document.querySelector("#form-adiciona");
        //extraindo informações do pct 2
        //foi feita função para deixar o código mais enxuto
        var paciente = obtemPacienteDoFormulario(form);
            
        /*
        //Extraindo informações do pct 1
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;
        */

        //Cria a Td e a Tr do paciente
       //Para criar uma linha de tabela no HTML com os dados do formulário
       // Usamos o createElement para criar um elemento, no () colocamos a tag desse elemento
       //E ela nos retorna um objeto HTML
       // No nosso caso, o elemento é uma tbela <tr>

        //var pacienteTr = montaTR(paciente);

        var erros = validaPaciente(paciente);
            console.log(erros);

            if(erros.length > 0){
                exibeMensagensDeErro(erros);
                return;
            }


    /*
       var pacienteTr = document.createElement("tr");

       //Para criar as células(linhas) da tabela, usamos a tag <td>
       //criaremos var para cada campo de informação do nosso form
       var nomeTd = document.createElement("td");
       var pesoTd = document.createElement("td");
       var alturaTd = document.createElement("td");
       var gorduraTd = document.createElement("td");
       var imcTd = document.createElement("td");


       nomeTd.textContent = nome;
       pesoTd.textContent = peso;
       alturaTd.textContent = altura;
       gorduraTd.textContent = gordura;
       imcTd.textContent = calculaImc(peso, altura);

       //Para formar a minha <tr> com todas as suas <td>
       // usamos a função appendChild = Coloque como filho
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        */

        //A tabela no HTML está dentro do body, então foi griado um ID p englobar toda essa tabela
        //buscamos a tabela pelo document.querySelector
        // E a appendChild para adicionar o novo "filho"/linha/ célula da tabela que já existe
        //var tabela = document.querySelector("#tabela-pacientes");
       // tabela.appendChild(pacienteTr);

       adicionaPacienteNaTabela(paciente);

        form.reset();

        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";

       
}); 


function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);



}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // permite controlar o HTML interno de um elemento

        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
}




function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)

    }
    return paciente;
}

function montaTR(paciente){
    //Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    /*
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    */

    /*
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

   
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    */

    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido"); // Push: adc algo no array
    }
  
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.");
    }
        return erros;
       
}