$(document).ready(function () {

    //slider
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
            content: 'Actualmente las comisiones se encuentran abiertas y los precios varían según el tipo de dibujo, por ejemplo: Headshot - 6 USD | Bust 8 USD | Half body 10 USD | Full Body 20 USD. <br> Los metodos de pago son PayPal o Bancoppel (esta es otra opción para los que son de México). <br> Puedo dibujar: FanArt, OCs (original characters / personajes originales de otros artistas), humanos, animales y personajes de fantasía. No dibujo gore, furry, armaduras, mecha. <br> <a href="https://www.instagram.com/p/B2R2SrwlH6v/" target="_blank">clic para mas detalles.</a>  '
        },
        {
            titulo: 'ArtTrade',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'Un arttrade es cuando un artista hace un intercambio de dibujo con otro, puede ser por ejemplo el mas común cuando cada artista dibuja un oc del otro. Esto sirve para que los seguidores de cada artista conoscan al otro artista. Actualmente llevo hechos 2 arttrades, pueden verlos visitando mi perfil en la historia destacada de ArtTrade o clic en el siguiente enlace: <br> <a href="https://www.instagram.com/stories/highlights/17859729613385960/" target="_blank">ArtTrades.</a> '
        },
        {
            titulo: 'Art Style',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'Aun me falta mucho por pulir mi estilo, el estilo es muy importante ya que es con lo que las personas te pueden identificar con el simple hecho de ver el dibujo. Mi estilo actual aunque no esta muy definido, va muy influenciado por el estilo anime, con un lineart algo limpio. Como menciono aun falta mucho por mejorar.'
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





});
 
 