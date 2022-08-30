document.addEventListener('DOMContentLoaded', () => {
    $(document).on("click", ".js-menuOpen", function(){
        $(this).toggleClass('active')
        let menuList = $('.js-menuList');
        menuList.toggleClass('active')
    });
    $(document).on("click", ".js-megamenuOpen", function(){
        $(this).toggleClass('open')
        let megamenu = $('.js-megamenu');
        megamenu.toggleClass('open')
    });
    $(document).on("click", ".js-headerBurger", function(){
        $(this).toggleClass('close')
        let headerMenu = $('.js-headerMenu');
        headerMenu.toggleClass('open');
        if ($(this).hasClass('close')) {
            wrapperFixPosition();
            $('.js-headerCall').hide();
        } else {
            wrapperUnfixPosition();
            $('.js-headerCall').show();
        }
    });
    $(document).on("click", ".js-search", function(){
        $(this).toggleClass('open');
        let searchBlock = $('.js-searchBlock');
        searchBlock.toggleClass('open');
        let headerLinks = $('.js-headerLinks');
        height = headerLinks.height();
        width = headerLinks.width();
        position = headerLinks.position();
        searchBlock.css({"height": height + 1, "width": width, "left" : position.left});
    });
    $(document).on("click", ".js-searchClose", function() {
        $('.js-search').toggleClass('open');
        let searchBlock = $('.js-searchBlock');
        searchBlock.toggleClass('open');
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