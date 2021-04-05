const $navBar = $('<nav class=" navBar">\n' +
    '<div class="fixed-nav">\n' +
    ' <a href="index.html" class="logo"><img class="selnet-logo" src="img/selnet.png" alt="selnet-logo"></a>\n' +

    '<ul class="navBar-list">\n' +
    '  <li class="list-item">  <a href="index.html" class="list-item-link ">Home</a></li>\n' +
    '  <li class="list-item">  <a href="about.html" class="list-item-link ">About us</a></li>\n' +
    '  <li class="list-item">  <a href="fees.html" class="list-item-link ">Fees</a></li>\n' +
    '  <li class="list-item">   <a href="scope.html" class="list-item-link ">Scope</a></li>\n' +
    '  <li class="list-item">   <a href="payments.html" class="list-item-link ">Payments</a></li>\n' +
    '  <li class="list-item">   <a href="contact.html" class="list-item-link ">Contact</a></li>\n' +

    '  <li> <div class="lang-container">\n' +
    '       <div class="dropdown">\n' +
    '            <div class="dd-a"><span> Language<i class="caret fas fa-caret-down"></i></span></div>\n' +
    '            <input type="checkbox">\n' +

    '                 <div class="dd-c">\n' +
    '                       <ul>\n' +
    '<li><a class="dd-link" href="#"><span><img class="flag-img"  src="img/language/flag_az.png" alt="">AZ</span></a></li>\n' +
    '<li><a class="dd-link" href="#"><span><img class="flag-img"  src="img/language/flag_en.png" alt="">EN</span></a></li>\n' +
    '<li><a class="dd-link" href="#"><span><img class="flag-img"  src="img/language/flag_ru.png" alt="">RU</span></a></li>\n' +
    '</ul>\n' +
    '</div>\n' +

    '</div>\n' +
    '</div>\n' +

    '</li>\n' +

    '<li>\n' +
    '<div class="line-cont">\n' +
    '<div class="vertical-line">\n' +
    '</div>\n' +
    '</div>\n' +
    '</li>\n' +

    '<li>\n' +
    '<div class="login-cont">\n' +
    '<a class="login-link href="https://customer.selnet.az/">\n' +
    '<i class="login-icon fas fa-sign-in-alt"></i>\n' +
    '<p class="login">Log in</p>\n' +
    '</a>\n' +
    '</div>\n' +
    '</li>\n' +

    '</ul>\n' +
    '</div>\n' +
    '</div>' +
    '</nav>');
$navBar.hide();

// Why not to have $navbar in DOM from the beginning but with inline style display none?
// Also look, it adds the same navbar after each of the script, so as a result you have several navbars
// https://ibb.co/nBv1Myz
$("script").before($navBar);

$(window).scroll(function(event) {
    if ($(window).scrollTop() > 44) {
        $navBar.fadeIn(600);
    } else {
        $navBar.fadeOut(600);
    }
});
AOS.init({
    duration: 1300
});


$(document).ready(function() {
    $(".clients-row").slice(0, 3).show();
    $(".load-btn").on("click", function(e) {
        e.preventDefault();
        // This doesn't have practical usage since all the is already in DOM,
        // for correct usage of load more, have a look to json, if you don't remember
        // https://beginnersbook.com/2015/04/json-tutorial/
        // and also go for ajax requests in jquery
        // https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
        // backend should hive you paginated content with API, you will send get request for example to selnet.az/partners
        // and in return get the json with the name of partner, and logo image
        // I will give an example response

        // const exampleResponse = '[{"partnerTitle":"McDonalds","img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"},{"partnerTitle":"Apple","img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"},{"partnerTitle":"Facebook","img":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"}]';
        //
        // const parsedJson = JSON.parse(exampleResponse);
        // console.log(parsedJson);

        // And then you will go like
        // let content = '';
        // parsedJson.forEach( (partner) => {
        //     content += `<div class="client-card">
        //                         <img class="card-logo shok-logo" src="${partner.img}" alt="${partner.partnerTitle}">
        //                     </div>`
        // })

        // And then you will append to your container

        $(".clients-row:hidden").slice(0, 1).slideDown();
        if ($(".clients-row:hidden").length == 0) {
            $(".load-btn").text("No Content").addClass("noContent");
        }
    });

})


var a = 0;
$(window).scroll(function() {

    // You shouyld check whether counter is present in dom, because if it's not it gives an error
    // Please see
    // https://ibb.co/5BjKBQb
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});




// Initialize and add the map
function initMap() {
    const selnet = { lat: 40.450213033764776, lng: 49.749572145093396 };
    // The map, centered at Selnet
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: selnet
    });
    // The marker, positioned at Selnet
    const marker = new google.maps.Marker({
        position: selnet,
        map: map,
    });
}




$(document).ready(function() {

    $("#tab1_content").show();
    $("#tab2_content").hide();
    $("#tab3_content").hide();

    $("#tab1").click(function() {
        $("#tab1_content").show();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
    });

    $("#tab2").click(function() {
        $("#tab2_content").show();
        $("#tab1_content").hide();
        $("#tab3_content").hide();
    });

    $("#tab3").click(function() {
        $("#tab3_content").show();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
    });


});



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-list');
    const navLinks = document.querySelectorAll('.navbar-list li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`;

            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();