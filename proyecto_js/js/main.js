$(document).ready(function() {

    
    var theme = localStorage.getItem('theme');
    var theme_css = $('#theme');    
    if(theme != null) {
        theme_css.attr('href', theme);
    }
    //Selector de tema
    $('#to-green').click(function () {
        theme_css.attr('href', 'css/green.css');
        localStorage.setItem('theme', 'css/green.css');
    });
    $('#to-red').click(function () {
        theme_css.attr('href', 'css/red.css');
        localStorage.setItem('theme', 'css/red.css');
    });
    $('#to-blue').click(function () {
        theme_css.attr('href', 'css/blue.css');
        localStorage.setItem('theme', 'css/blue.css');
    });  
    
    if(window.location.href.indexOf('index') > -1) {
        //Slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });

        //Post
        moment.locale('es');  
        var posts = [
            {
                title: 'Titulo 1',
                date: 'Publicado el ' + moment().format('LL'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit, nesciunt asperiores in, eligendi delectus qui sunt molestiae eveniet aspernatur adipisci soluta reiciendis cupiditate quibusdam ducimus aut cumque velit impedit officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus sunt, corrupti aspernatur consectetur dolorum officiis facilis quisquam magnam obcaecati exercitationem odio cupiditate, laborum natus alias rem qui ipsa voluptatum? Reprehenderit.'
            },
            {
                title: 'Titulo 2',
                date: 'Publicado el ' + moment().format('LL'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit, nesciunt asperiores in, eligendi delectus qui sunt molestiae eveniet aspernatur adipisci soluta reiciendis cupiditate quibusdam ducimus aut cumque velit impedit officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus sunt, corrupti aspernatur consectetur dolorum officiis facilis quisquam magnam obcaecati exercitationem odio cupiditate, laborum natus alias rem qui ipsa voluptatum? Reprehenderit.'
            },
            {
                title: 'Titulo 3',
                date: 'Publicado el ' + moment().format('LL'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit, nesciunt asperiores in, eligendi delectus qui sunt molestiae eveniet aspernatur adipisci soluta reiciendis cupiditate quibusdam ducimus aut cumque velit impedit officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus sunt, corrupti aspernatur consectetur dolorum officiis facilis quisquam magnam obcaecati exercitationem odio cupiditate, laborum natus alias rem qui ipsa voluptatum? Reprehenderit.'
            },
            {
                title: 'Titulo 4',
                date: 'Publicado el ' + moment().format('LL'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit, nesciunt asperiores in, eligendi delectus qui sunt molestiae eveniet aspernatur adipisci soluta reiciendis cupiditate quibusdam ducimus aut cumque velit impedit officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus sunt, corrupti aspernatur consectetur dolorum officiis facilis quisquam magnam obcaecati exercitationem odio cupiditate, laborum natus alias rem qui ipsa voluptatum? Reprehenderit.'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
                <article class="post" >
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article >
            `;
            $('#posts').append(post);
        });   
    }   

    //Login
    var login = $('#login');
    var form = $('#login form');
    var nombre;
    
    form.submit(function(e) {
        //e.preventDefault();
        var frm_nombre = $('#nombre').val();
        localStorage.setItem('nombre', frm_nombre);
    });
    
    nombre = localStorage.getItem('nombre');
    if (nombre != null && nombre != 'undefined') {
        $('#login h4 span').text('Bienvenido');
        login.append(`
            <strong>${nombre}</strong>
            <a href="#" id="logout">Cerrar Sesión</a>
        `);
        form.hide();
    }
    
    $('#logout').click(function() {
        localStorage.clear();
        location.reload();
    });

    //Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Solo para about.html
    if(window.location.href.indexOf('about') > -1) {
        $('#acordion').accordion();
    }

    //Solo para el reloj.hmtl
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj = moment().format('h:mm:ss a');
            $('#reloj').html(reloj);
        },1000);        
    }

    //Solo para el contact.html
    if(window.location.href.indexOf('contact') > -1) {
        $('#form-contact input[name="date"').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
        
    
});