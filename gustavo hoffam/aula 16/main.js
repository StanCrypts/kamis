
function soma(numeroParametro){
            const numero1 = 10
            const numero2 = 20
            const resultado = numero1 + numero2 + numeroParametro;
            console.log(resultado);
        }

        soma(6);
        soma(2);
 
        const botaoAcao = document.getElementById("btn-acao");
        botaoAcao.addEventListener("click", realizarAcaoClick);

        function realizarAcaoClick(){
            const tituloh1 = document.getElementById("primeiro-titulo");
            tituloh1.style.color = "blue";
            tituloh1.innerHTML = "Titulo alterado via js";

            const titulosPorCss = document.getElementsByClassName("titulo");
            for(let i = 0; i < titulosPorCss.length; i++){
            titulosPorCss[i].style.color = "red";


        }
    }
