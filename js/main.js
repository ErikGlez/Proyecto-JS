$(document).ready(function () {

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //post
    var post = [
        {
            titulo: 'Commissions',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'Actualmente las comisiones se encuentran abiertas y los precios varian segun el tipo de dibujo, por ejemplo: Headshot - 6 USD | Bust 8 USD | Half body 10 USD | Full Body 20 USD. <br> Los metodos de pago son PayPal o Bancoppel (esta es otra opcion para los que son de México). <br> Puedo dibujar: FanArt, OCs (original characters / personajes originales de otros artistas), humanos, animales y personajes de fantasía. No dibujo gore, furry, armaduras, mecha. <br> <a href="https://www.instagram.com/p/B2R2SrwlH6v/" target="_blank">clic para mas detalles.</a>  '
        },
        {
            titulo: 'ArtTrade',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'Un arttrade es cuando un artista hace un intercambio de dibujo con otro, puede ser por ejemplo el mas comun cuando cada artista dibuja un oc del otro. Esto sirve para que los seguidores de cada artista conoscan al otro artista. Actualmente llevo hechos 2 arttrades, pueden verlos visitando mi perfil en la historia destacada de ArtTrade o clic en el siguiente enlace: <br> <a href="https://www.instagram.com/stories/highlights/17859729613385960/" target="_blank">ArtTrades.</a> '
        },
        {
            titulo: 'Art Style',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'Aun me falta mucho por pulir mi estilo, el estilo es muy importante ya que es con lo que las personas te pueden identificar con el simple hecho de ver el dibujo. Mi estilo actual aunque no esta muy definido, va muy influenciado por el estilo anime, con un lineart algo limpio. Como mensiono aun falta mucho por mejorar.'
        },
       

    ]

    post.forEach((item, index) => {
    var post = `
        <article class="post">
        <h2>${item.titulo}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
       </article>
       `;

       $("#posts").append(post);

    });

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