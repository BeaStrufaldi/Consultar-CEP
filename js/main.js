function consultaCep(){
    $(".barraprogresso").show();
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulocep").html("CEP " + response.cep);
            $(" .cep").show();
            $(".barraprogresso").hide();
            $(".correio").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barraprogresso").hide();
});