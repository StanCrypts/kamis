$(".document").ready(function(){
    $(".horario").on("click", e => {
        const horarioSelecionado = $(e.target).data("horario");
        
        $("#textoConfirmacao").text("voce selecionou o horario: " + horarioSelecionado);
        
        $("#modalAgenda").modal("hide");

        $("#modalConfirmacao").modal("show");
    })
    
});
