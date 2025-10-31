$(document).ready(inicializar);

function inicializar(){

   $("#formPessoa").on("button", (event) => {
    event.preventDafault();


    const nomePessoa = $(#nome).val();
    const telefonePessoa = $(#telefone).val();
    const emailPessoa = $(#email).val();
    const enderecoPessoa = $(#endereco).val();

    $("#listaPessoas").append(`
    <tr>
        <td>${nomePessoa}</td>
        <td>${telefonePessoa}</td>
        <td>${emailPessoa}</td>
        <td>${enderecoPessoa}</td>
       `);

       const modal = document.getElementById("modal")

   })
}

  