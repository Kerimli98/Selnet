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


var map;
var longitudelng;
var infowindow;

$(document).ready(function () {
    var data = [
        {
            "latitude": 40.4578044,
            "longitude": 49.64471959999999
        },
        {
            "latitude": 40.421093,
            "longitude": 49.8420869
        },

        {
            "latitude": 40.3933281,
            "longitude": 49.8430633
        },
        {
            "latitude": 40.3820104,
            "longitude": 49.8885073
        },
        {
            "latitude": 40.0257239,
            "longitude": 47.3290937
        },
        {
            "latitude": 41.1124969,
            "longitude": 45.447689
        },
        {
            "latitude": 41.09626770000001,
            "longitude": 45.5167826
        },
        {
            "latitude": 41.3224422,
            "longitude": 45.2677583
        },
        {
            "latitude": 41.1124969,
            "longitude": 45.447689
        },
        {
            "latitude": 41.12502629999999,
            "longitude": 45.4504822
        },
        {
            "latitude": 41.1296061,
            "longitude": 45.4585266
        },
        {
            "latitude": 40.5742298,
            "longitude": 48.3896404
        },
        {
            "latitude": 40.5742298,
            "longitude": 48.3896404
        },
        {
            "latitude": 40.5742298,
            "longitude": 48.3896404
        },
        {
            "latitude": 40.40457139999999,
            "longitude": 49.7961932
        },
        {
            "latitude": 40.3693971,
            "longitude": 49.834385
        },
        {
            "latitude": 40.3755631,
            "longitude": 49.861846
        },
        {
            "latitude": 40.981621,
            "longitude": 45.6556052
        },
        {
            "latitude": 40.43914760000001,
            "longitude": 49.7003974
        },
        {
            "latitude": 40.4107758,
            "longitude": 49.8614086
        },
        {
            "latitude": 40.4123424,
            "longitude": 49.8354131
        },
        {
            "latitude": 40.3920846,
            "longitude": 49.9160292
        },
        {
            "latitude": 40.332126,
            "longitude": 49.80398080000001
        },
        {
            "latitude": 40.4249808,
            "longitude": 49.950331
        },
        {
            "latitude": 40.414154,
            "longitude": 49.878915
        },
        {
            "latitude": 40.40926169999999,
            "longitude": 49.8670924
        },
        {
            "latitude": 41.7037509,
            "longitude": 46.4044213
        },
        {
            "latitude": 39.74346970000001,
            "longitude": 47.9544863
        },
        {
            "latitude": 39.8120164,
            "longitude": 47.6488109
        },
        {
            "latitude": 40.3706555,
            "longitude": 47.1378909
        },
        {
            "latitude": 40.3706555,
            "longitude": 47.1378909
        },
        {
            "latitude": 40.3706555,
            "longitude": 47.1378909
        },
        {
            "latitude": 40.3408157,
            "longitude": 47.0893228
        },
        {
            "latitude": 40.4235762,
            "longitude": 49.80353849999999
        },
        {
            "latitude": 39.5396107,
            "longitude": 48.45467259999999
        },
        {
            "latitude": 40.4385006,
            "longitude": 49.8051354
        },
        {
            "latitude": 39.4598833,
            "longitude": 48.5509813
        },
        {
            "latitude": 40.4505055,
            "longitude": 49.7447441
        },
        {
            "latitude": 40.3962973,
            "longitude": 47.1828832
        },
        {
            "latitude": 41.3945991,
            "longitude": 48.8715068
        },
        {
            "latitude": 39.218442,
            "longitude": 48.4295146
        },
        {
            "latitude": 39.2163114,
            "longitude": 48.60874880000001
        },
        {
            "latitude": 40.78037459999999,
            "longitude": 46.121351
        },
        {
            "latitude": 40.416244,
            "longitude": 49.8610471
        },
        {
            "latitude": 40.3714725,
            "longitude": 49.84768529999999
        },
        {
            "latitude": 40.143105,
            "longitude": 47.576927
        },
        {
            "latitude": 41.7367779,
            "longitude": 48.5493617
        },
        {
            "latitude": 40.4012935,
            "longitude": 49.9835427
        },
        {
            "latitude": 40.143105,
            "longitude": 47.576927
        },
        {
            "latitude": 40.643763,
            "longitude": 46.372589
        },
        {
            "latitude": 40.6878581,
            "longitude": 46.3723313
        },
        {
            "latitude": 40.6769204,
            "longitude": 46.3599038
        },
        {
            "latitude": 40.8764429,
            "longitude": 49.3450575
        },
        {
            "latitude": 40.65273579999999,
            "longitude": 46.8511027
        },
        {
            "latitude": 40.3958799,
            "longitude": 49.8155264
        },
        {
            "latitude": 40.3728747,
            "longitude": 49.6776204
        },
        {
            "latitude": 41.5762306,
            "longitude": 48.6319375
        },
        {
            "latitude": 41.5308726,
            "longitude": 48.6281898
        },
        {
            "latitude": 40.3754364,
            "longitude": 49.8571156
        },
        {
            "latitude": 40.3802589,
            "longitude": 50.0918078
        },
        {
            "latitude": 40.3712895,
            "longitude": 49.9774444
        },
        {
            "latitude": 40.37314,
            "longitude": 49.8143627
        },
        {
            "latitude": 40.3944284,
            "longitude": 49.8945477
        },
        {
            "latitude": 40.4017255,
            "longitude": 49.8585064
        },
        {
            "latitude": 40.0501552,
            "longitude": 47.4477454
        },
        {
            "latitude": 40.3736594,
            "longitude": 49.8493588
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.4272881,
            "longitude": 49.8392881
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.143105,
            "longitude": 47.576927
        },
        {
            "latitude": 40.5467097,
            "longitude": 49.9167796
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.3386187,
            "longitude": 48.1463281
        },
        {
            "latitude": 40.3446069,
            "longitude": 48.14916119999999
        },
        {
            "latitude": 40.3446069,
            "longitude": 48.14916119999999
        },
        {
            "latitude": 39.8694686,
            "longitude": 48.0665218
        },
        {
            "latitude": 40.3698651,
            "longitude": 48.1644626
        },
        {
            "latitude": 40.2453265,
            "longitude": 48.1764003
        },
        {
            "latitude": 38.7528669,
            "longitude": 48.8475015
        },
        {
            "latitude": 40.4001309,
            "longitude": 49.8529446
        },
        {
            "latitude": 39.0340722,
            "longitude": 48.6589354
        },
        {
            "latitude": 40.4502093,
            "longitude": 49.7660323
        },
        {
            "latitude": 40.4724514,
            "longitude": 49.7564034
        },
        {
            "latitude": 40.4724514,
            "longitude": 49.7564034
        },
        {
            "latitude": 40.4580414,
            "longitude": 49.75624939999999
        },
        {
            "latitude": 40.4724514,
            "longitude": 49.7564034
        },
        {
            "latitude": 40.4904262,
            "longitude": 49.7590856
        },
        {
            "latitude": 40.7702563,
            "longitude": 47.0496015
        },
        {
            "latitude": 40.4046587,
            "longitude": 49.8621874
        },
        {
            "latitude": 40.5854765,
            "longitude": 49.6317411
        },
        {
            "latitude": 40.3903846,
            "longitude": 49.8342438
        },
        {
            "latitude": 40.0163478,
            "longitude": 49.136285
        },
        {
            "latitude": 40.3692694,
            "longitude": 49.827015
        },
        {
            "latitude": 40.3707404,
            "longitude": 49.8496994
        },
        {
            "latitude": 40.3903846,
            "longitude": 49.8342438
        },
        {
            "latitude": 40.4133798,
            "longitude": 49.8610701
        },
        {
            "latitude": 41.0971074,
            "longitude": 45.3516331
        },
        {
            "latitude": 40.9981633,
            "longitude": 47.8699826
        },
        {
            "latitude": 40.9253925,
            "longitude": 47.8016106
        },
        {
            "latitude": 40.978647,
            "longitude": 47.8474911
        },
        {
            "latitude": 40.9981633,
            "longitude": 47.8699826
        },
        {
            "latitude": 40.9981633,
            "longitude": 47.8699826
        },
        {
            "latitude": 40.9981633,
            "longitude": 47.8699826
        },
        {
            "latitude": 40.9981633,
            "longitude": 47.8699826
        },
        {
            "latitude": 40.9981633,
            "longitude": 47.8699826
        },
        {
            "latitude": 41.3643024,

            "longitude": 48.5260928
        },
        {
            "latitude": 41.3643024,
            "longitude": 48.5260928
        },
        {
            "latitude": 41.331796,
            "longitude": 48.5395413
        },
        {
            "latitude": 41.3643024,
            "longitude": 48.5260928
        },
        {
            "latitude": 41.343994,
            "longitude": 48.7519698
        },
        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 41.3643024,
            "longitude": 48.5260928
        },
        {
            "latitude": 41.327934,
            "longitude": 48.6623083
        },
        {
            "latitude": 41.3403113,
            "longitude": 48.6218569
        },
        {
            "latitude": 41.3643024,
            "longitude": 48.5260928
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.3683874,
            "longitude": 48.491604
        },
        {
            "latitude": 41.59109,
            "longitude": 48.533572
        },
        {
            "latitude": 41.702212,
            "longitude": 48.5074395
        },
        {
            "latitude": 41.4206965,
            "longitude": 48.1766523
        },
        {
            "latitude": 41.6949493,
            "longitude": 48.4879721
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.6871472,
            "longitude": 48.51433
        },
        {
            "latitude": 41.4266886,
            "longitude": 48.4345577
        },
        {
            "latitude": 41.59109,
            "longitude": 48.533572
        },
        {
            "latitude": 40.3945182,
            "longitude": 49.8386971
        },
        {
            "latitude": 40.40585,
            "longitude": 49.84055
        },
        {
            "latitude": 40.3981206,
            "longitude": 49.8007273
        },
        {
            "latitude": 39.5779145,
            "longitude": 48.9718588
        },
        {
            "latitude": 39.5779145,
            "longitude": 48.9718588
        },
        {
            "latitude": 40.634486,
            "longitude": 48.6433355
        },
        {
            "latitude": 40.5091317,
            "longitude": 48.657757
        },
        {
            "latitude": 40.4194306,
            "longitude": 48.6136122
        },
        {
            "latitude": 40.7104441,
            "longitude": 48.63233109999999
        },
        {
            "latitude": 40.63187310000001,
            "longitude": 48.6363801
        },
        {
            "latitude": 41.1974753,
            "longitude": 47.1571241
        },
        {
            "latitude": 41.1974753,
            "longitude": 47.1571241
        },
        {
            "latitude": 41.2666416,
            "longitude": 47.017032
        },
        {
            "latitude": 41.297565,
            "longitude": 46.9865055
        },
        {
            "latitude": 41.1947246,
            "longitude": 47.1740783
        },
        {
            "latitude": 41.1947246,
            "longitude": 47.1740783
        },
        {
            "latitude": 41.1974753,
            "longitude": 47.1571241
        },
        {
            "latitude": 41.2037462,
            "longitude": 47.1968073
        },
        {
            "latitude": 40.8288144,
            "longitude": 46.0166879
        },
        {
            "latitude": 39.9265747,
            "longitude": 48.9205727
        },
        {
            "latitude": 41.134383,
            "longitude": 49.09367959999999
        },
        {
            "latitude": 40.3058129,
            "longitude": 49.7950199
        },
        {
            "latitude": 40.561741,
            "longitude": 49.68073
        },
        {
            "latitude": 40.5851915,
            "longitude": 49.6647433
        },
        {
            "latitude": 40.5854765,
            "longitude": 49.6317411
        },
        {
            "latitude": 40.5854765,
            "longitude": 49.6317411
        },
        {
            "latitude": 40.413523,
            "longitude": 49.8579876
        },
        {
            "latitude": 40.143105,
            "longitude": 47.576927
        },
        {
            "latitude": 41.3643024,
            "longitude": 48.5260928
        },
        {
            "latitude": 41.7438654,
            "longitude": 48.57289429999999
        },
        {
            "latitude": 40.3820903,
            "longitude": 49.9507378
        },
        {
            "latitude": 41.4591168,
            "longitude": 48.80206260000001
        },
        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 41.3652674,
            "longitude": 48.81269469999999
        },
        {
            "latitude": 41.5731916,
            "longitude": 48.7635201
        },
        {
            "latitude": 41.516131,
            "longitude": 48.8123729
        },
        {
            "latitude": 41.4648152,
            "longitude": 48.8535455
        },
        {
            "latitude": 41.4591168,
            "longitude": 48.80206260000001
        },
        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 41.4591168,
            "longitude": 48.80206260000001
        },
        {
            "latitude": 41.4648556,
            "longitude": 48.8053837
        },
        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 41.5091854,
            "longitude": 48.7580414
        },
        {
            "latitude": 41.4591168,
            "longitude": 48.80206260000001
        },
        {
            "latitude": 41.49562830000001,
            "longitude": 48.7622533
        },
        {
            "latitude": 41.5519253,
            "longitude": 48.7294294
        },
        {
            "latitude": 41.5563995,
            "longitude": 48.6571937
        },
        {
            "latitude": 41.4153672,
            "longitude": 48.8840593
        },
        {
            "latitude": 41.4591168,
            "longitude": 48.80206260000001
        },
        {
            "latitude": 41.570145,
            "longitude": 48.7289427
        },
        {
            "latitude": 41.6255412,
            "longitude": 48.7922496
        },
        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 40.3179446,
            "longitude": 47.1771897
        },
        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 41.5721381,
            "longitude": 48.8172358
        },
        {
            "latitude": 41.5737647,
            "longitude": 48.7958541
        },

        {
            "latitude": 41.481364,
            "longitude": 48.7825101
        },
        {
            "latitude": 40.3793492,
            "longitude": 49.95290019999999
        },
        {
            "latitude": 40.460893,
            "longitude": 49.724398
        },
        {
            "latitude": 40.4529251,
            "longitude": 49.7333235
        },
        {
            "latitude": 39.9931853,
            "longitude": 46.9949562
        },
        {
            "latitude": 40.3786768,
            "longitude": 49.842728
        },
        {
            "latitude": 40.456708,
            "longitude": 49.69969
        },
        {
            "latitude": 40.4529251,
            "longitude": 49.7333235
        },
        {
            "latitude": 41.6252602,
            "longitude": 48.6763991
        },
        {
            "latitude": 41.7583924,
            "longitude": 48.5794803
        },
        {
            "latitude": 41.7411619,
            "longitude": 48.6050858
        },
        {
            "latitude": 40.6196638,
            "longitude": 47.1500324
        },
        {
            "latitude": 40.3845994,
            "longitude": 49.85375
        },
        {
            "latitude": 41.603085,
            "longitude": 46.63830799999999
        },
        {
            "latitude": 40.3454671,
            "longitude": 49.9779876
        },
        {
            "latitude": 40.3987276,
            "longitude": 49.8630457
        },
        {
            "latitude": 41.4591168,
            "longtitude": 48.80206260000001
        }
    ]
    ViewCustInGoogleMap(data);
});

function ViewCustInGoogleMap(data) {
    var gm = google.maps;
    var mapOptions = {
        center: new google.maps.LatLng(40.45006562481697, 49.749793542758916),
        zoom: 16,
    };
    map = new google.maps.Map(document.getElementById("scope"), mapOptions);
    infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (var i = 0; i < data.length; i++) {
        marker = new gm.Marker({
            position: new gm.LatLng(data[i]['latitude'], data[i]['longitude']),
            map: map,
        });
    }

}
