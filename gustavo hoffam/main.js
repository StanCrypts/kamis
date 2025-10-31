const botaoAcao = document.getElementById("btn-acao");
botaoAcao.addEventListener("click", realizarAcaoClick);

const inputCep = document.getElementById("cep");
inputCep.addEventListener("change", realizarAcaoClick);

function realizarAcaoClick() {
    const cep = document.getElementById("cep").value;
    const url = "https://viacep.com.br/ws/"+cep+"/json/";

    fetch(url)
        .then(response => response.json())
        .then(conteudoJson => {
            document.getElementById("rua").value = conteudoJson.logradouro;
            document.getElementById("bairro").value = conteudoJson.bairro;
            document.getElementById("complemento").value = conteudoJson.complemento;
            document.getElementById("cidade").value = conteudoJson.localidade;
            document.getElementById("estado").value = conteudoJson.estado;
        })

}