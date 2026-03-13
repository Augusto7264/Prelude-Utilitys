function mostrarMais(){

            let conteudo = document.getElementById("maisPatches");
            let botao = document.getElementById("botaoPatch");

            if(conteudo.style.display === "block"){
                conteudo.style.display = "none";
                botao.innerText = "Mostrar mais";
            }
            else{
                conteudo.style.display = "block";
                botao.innerText = "Mostrar menos";
            }

        }