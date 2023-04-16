var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                var tdNome = paciente.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(this.value, "i"); 
                //espressão regular, auxilia a buscarmos por strings.
                // "i": aceita strigs maiuscula ou minuscula

                if (!expressao.test(nome)) {  //passamos p expressao o que queremos testar
                    paciente.classList.add("invisivel");
                } else {
                    paciente.classList.remove("invisivel");
                }
            }
        }else{
            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                paciente.classList.remove("invisivel");
        }
   }
});