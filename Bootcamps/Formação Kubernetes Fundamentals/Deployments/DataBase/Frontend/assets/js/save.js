$("#btn_salvar").on("click", function() {
    
    var txt_nome = $("#Name").val();
    var txt_mensagem = $("#Message").val(); 

    $.ajax({
        url: "http://127.0.0.1:30001/",
        type: "post",
        data: {nome: txt_nome, mensagem: txt_mensagem},
        beforeSend: function() {
            $("#resposta").html("Enviando......");
        }
    }).done(function(e) {
        $("#resposta").html("Dados salvos......");
    })

})