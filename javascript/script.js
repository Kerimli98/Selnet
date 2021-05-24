AOS.init({
    duration: 1400
});

var a = 0;
$(window).scroll(function () {

    if ($('#counter').length) {
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
                        duration: 2000,
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
    }

});

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
