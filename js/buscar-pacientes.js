var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
        var xhr = new XMLHttpRequest(); //XMLHttpRequest: faz requisições HTTP

        // open: especificaremos o tipo de requisição a ser feita, no caso, GET
        xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); //busca e traz os dados p JS

            // load: carregaremos a resposta da requisição - que no caso, serão nossos dados.
        xhr.addEventListener("load", function() { 
            var erroAjax = document.querySelector("#erro-ajax");

            if(xhr.status == 200){
                
                erroAjax.classList.add("invisível"); //se der tudo certo, fica invisível
                var resposta = xhr.responseText; // dados da resposta
                //console.log(resposta);
                //console.log(typeof resposta); //typeof = tipo de resposta

                var pacientes = JSON.parse(resposta); // transforma de Json p um obejto JS
                pacientes.forEach( function(paciente){
                    adicionaPacienteNaTabela(paciente);

                });
            }else{
                console.log(xhr.status); //status do erro
                console.log(xhr.responseText); //Texto do erro
                
                erroAjax.classList.remove("invisível"); // erro é mostrado na pág
            }

        });
            
        //send: para que realizar a ação que  especificamos no open
        xhr.send();

});