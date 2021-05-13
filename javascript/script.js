AOS.init({
    duration: 1400
});


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


var a = 0;
$(window).scroll(function () {

    // You shouyld check whether counter is present in dom, because if it's not it gives an error
    // Please see
    // https://ibb.co/5BjKBQb
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
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
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
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
    const selnet = {lat: 40.450213033764776, lng: 49.749572145093396};
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

$(document).ready(function () {

    $("#tab1_content").show();
    $("#tab2_content").hide();
    $("#tab3_content").hide();

    $("#tab1").click(function () {
        $("#tab1_content").show();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
    });

    $("#tab2").click(function () {
        $("#tab2_content").show();
        $("#tab1_content").hide();
        $("#tab3_content").hide();
    });

    $("#tab3").click(function () {
        $("#tab3_content").show();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
    });
});

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.addEventListener('click', () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");

});
cancelBtn.addEventListener('click', () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");

});
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};
