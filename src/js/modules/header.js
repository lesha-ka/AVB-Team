document.addEventListener('DOMContentLoaded', () => {
    $(document).on("click", ".js-menuOpen", function(){
        $(this).toggleClass('active')
        let menuList = $('.js-menuList');
        menuList.toggle('active')
    });
    $(document).on("click", ".js-megamenuOpen", function(){
        $(this).toggleClass('open')
        let megamenu = $('.js-megamenu');
        megamenu.toggle('open')
    });
})
var tempScrollTop, currentScrollTop = $(window).scrollTop();
$(window).on('scroll load', function () {
    let currentScrollTop = $(window).scrollTop();
    let menuList = $('.js-menuList');
    let megamenu = $('.js-megamenu');
    if (currentScrollTop > $('header').height() && !$('body').hasClass('hidden')) {
        $('body').addClass('fixed-header');
        if (tempScrollTop < currentScrollTop) {
            $('header').removeClass('show');
            megamenu.removeClass('open')
            menuList.removeClass('active')
        } else if (tempScrollTop > currentScrollTop) {
            $('header').addClass('show');
        }
    } else {
        $('body').removeClass('fixed-header');
        $('header').removeClass('show');
        megamenu.removeClass('open')
        menuList.removeClass('active')
    }    
    tempScrollTop = currentScrollTop;
});