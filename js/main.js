$(document).ready(function () {

   

    //selector de temas
    var theme = $("#theme");
    $("#to-orange").click(function(){

        theme.attr("href", "css/orange.css");
    });
    $("#to-blue").click(function(){

        theme.attr("href", "css/blue.css");
    });
    $("#to-brown").click(function(){

        theme.attr("href", "css/brown.css");
    });

    //scroll arriba
    $(".subir").click(function(e){
         e.preventDefault();

         $('html,body').animate({
          scrollTop:0
         },500);

         return false;
    });

    //login falso

    $("#login form").submit(function(){
       var form_name= $("#form_name").val();

       localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var about_p = $("#about p");
        about_p.html("Bienvenido, "+form_name);
        $("#plogout").html("<a href'#' id='logout'>Cerrar sesion</a>");
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }else{
        $("#about p").hide();
    }
   

});