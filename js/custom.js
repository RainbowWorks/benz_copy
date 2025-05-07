$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });
});

$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,/*겹치는 슬라이드이다. wiper-parallax="300" html에 적어줘야됨*/
        speed: 1000,/*옮기는거1초*/
    });/*슬라이드 돌아감, 베껴쓰면된다.*/

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });
    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 200) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});