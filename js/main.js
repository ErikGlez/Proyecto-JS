$(document).ready(function () {

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //post
    var post = [
        {
            titulo: 'Titulo 1',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'orem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum velit veritatis Veritatis iste deserunt quod perspiciatis sit Eligendi voluptate impedit expedita dolorum voluptatem ut aliquid magnam accusamus nisi doloribus.'
        },
        {
            titulo: 'Titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'orem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum velit veritatis Veritatis iste deserunt quod perspiciatis sit Eligendi voluptate impedit expedita dolorum voluptatem ut aliquid magnam accusamus nisi doloribus.'
        },
        {
            titulo: 'Titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'orem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum velit veritatis Veritatis iste deserunt quod perspiciatis sit Eligendi voluptate impedit expedita dolorum voluptatem ut aliquid magnam accusamus nisi doloribus.'
        },
        {
            titulo: 'Titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            content: 'orem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum velit veritatis Veritatis iste deserunt quod perspiciatis sit Eligendi voluptate impedit expedita dolorum voluptatem ut aliquid magnam accusamus nisi doloribus.'
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