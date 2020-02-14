//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend flipclock.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../css/course-ie.min.css";
    head.appendChild(link);
}
$(document).ready(function () {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    /* Таймер */
    var clock;
    var futureDate = new Date("January 10, 2020 00:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        // $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4259&clean=true&lg=ru');
        // $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4261&clean=true&lg=ru');
        // $('#link-3').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4263&clean=true&lg=ru');
        // $('.cost-full span').addClass('unbroken');
        // $('.timer, .cost-sale, .cost-today').remove();
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                // $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4259&clean=true&lg=ru');
                // $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4261&clean=true&lg=ru');
                // $('#link-3').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4263&clean=true&lg=ru');
                // $('.cost-full span').addClass('unbroken');
                // $('.timer, .cost-sale, .cost-today').remove();
            }
        },
    });




    // $(function () {
    //     var clock;
    //     var dates = new Array(
    //         new Date("February 06, 2020 00:00 UTC+3"),
    //         new Date("February 07, 2020 00:00 UTC+3"),
    //         new Date("February 08, 2020 00:00 UTC+3")
    //     );

    //     var currentDate = new Date();

    //     var sale1 = {
    //         name: $('#sale-1'),
    //         saleText: new Array('1 000р.', '500р.')
    //     };
    //     var sale2 = {
    //         name: $('#sale-2'),
    //         saleText: new Array('2 000р.', '1 000р.')
    //     };
    //     var sale3 = {
    //         name: $('#sale-3'),
    //         saleText: new Array('4 000р.', '2 000р.')
    //     };
    //     var today1 = {
    //         name: $('#today-1'),
    //         todayText: new Array('5 900р.', '6 400р.')
    //     };
    //     var today2 = {
    //         name: $('#today-2'),
    //         todayText: new Array('11 900р.', '12 900р.')
    //     };
    //     var today3 = {
    //         name: $('#today-3'),
    //         todayText: new Array('16 900р.', '18 900р.')
    //     };
    //     var link1 = {
    //         name: $('#link-1'),
    //         linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4441&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4442&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4443&clean=true&lg=ru')
    //     };
    //     var link2 = {
    //         name: $('#link-2'),
    //         linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4445&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4446&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4447&clean=true&lg=ru')
    //     };
    //     var link3 = {
    //         name: $('#link-3'),
    //         linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4449&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4450&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4451&clean=true&lg=ru')
    //     };

    //     if (currentDate < dates[0]) {
    //         var futureDate = dates[0];
    //         var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    //         clock = $('.clock').FlipClock(diff, {
    //             clockFace: 'HourlyCounter',
    //             countdown: true,
    //             language: 'ru',
    //             callbacks: {
    //                 stop: function () {
    //                     $('.clock-stop').addClass("alert-danger");
    //                     ("alert-danger");
    //                     $('.clock-stop').html("Скидка уменьшилась!");
    //                     sale1.name.text(sale1.saleText[0]);
    //                     sale2.name.text(sale2.saleText[0]);
    //                     sale3.name.text(sale3.saleText[0]);
    //                     today1.name.text(today1.todayText[0]);
    //                     today2.name.text(today2.todayText[0]);
    //                     today3.name.text(today3.todayText[0]);
    //                     link1.name.attr('href', link1.linkText[0]);
    //                     link2.name.attr('href', link2.linkText[0]);
    //                     link3.name.attr('href', link3.linkText[0]);
    //                 }
    //             }
    //         });
    //     } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
    //         var futureDate = dates[1];
    //         var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    //         clock = $('.clock').FlipClock(diff, {
    //             clockFace: 'HourlyCounter',
    //             countdown: true,
    //             language: 'ru',
    //             callbacks: {
    //                 stop: function () {
    //                     $('.clock-stop').addClass("alert-danger");
    //                     ("alert-danger");
    //                     $('.clock-stop').html("Скидка уменьшилась!");
    //                     sale1.name.text(sale1.saleText[1]);
    //                     sale2.name.text(sale2.saleText[1]);
    //                     sale3.name.text(sale3.saleText[1]);
    //                     today1.name.text(today1.todayText[1]);
    //                     today2.name.text(today2.todayText[1]);
    //                     today3.name.text(today3.todayText[1]);
    //                     link1.name.attr('href', link1.linkText[1]);
    //                     link2.name.attr('href', link2.linkText[1]);
    //                     link3.name.attr('href', link3.linkText[1]);
    //                 }
    //             }
    //         });
    //     } else {
    //         var futureDate = dates[2];
    //         var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    //         clock = $('.clock').FlipClock(diff, {
    //             clockFace: 'HourlyCounter',
    //             countdown: true,
    //             language: 'ru',
    //             callbacks: {
    //                 stop: function () {
    //                     $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
    //                     $('.cost-full span').addClass('unbroken');
    //                     link1.name.attr('href', link1.linkText[2]);
    //                     link2.name.attr('href', link2.linkText[2]);
    //                     link3.name.attr('href', link3.linkText[2]);
    //                 }
    //             }
    //         });
    //     }
    // });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $(".video-wrapper-rev img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allowfullscreen></iframe>')
    });

    /*Конец документа*/
});