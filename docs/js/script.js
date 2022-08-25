document.addEventListener('DOMContentLoaded', () => {
    $(".js-inputTel").click(function(){
        $(this).setCursorPosition(4);
    })
    $.mask.definitions['9'] = false;
    $.mask.definitions['5'] = "[0-9]";
    $(".js-inputTel").mask("+49 5555555555");
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
    };
    $(".js-submitForm").click(function(){
        let form = $(this).closest('.js-form');
        let error = 0;
        let email = form.find('input[type="email"]')
        let emailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        let inputs = form.find('input');
        let checkbox = form.find('input[type="checkbox"]')
	    if(!email.val().search(emailPattern) == 0){
            email.addClass('error');
            error++;
    	} else {
            email.removeClass('error');
        }
        inputs.each(function() {
            let val = $(this).val()
            if (val == "") {
                $(this).addClass('error');
                error++
            } else {
                $(this).removeClass('error');
            }
        });
        checkbox.each(function() {
            if (!$(this).is(':checked')) {
                $(this).addClass('error');
                error++
            } else {
                $(this).removeClass('error');
            }
        });
    })
});
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
        } else {
            wrapperUnfixPosition();
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
document.addEventListener('DOMContentLoaded', () => {
    if ($('#map').length) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXBtZWRpYSIsImEiOiJjbDc0YXBqMnUxZzd1M29veWNzc3VsYTVxIn0.DcWO19SF7jrcnxwzR_41YQ';
            const point = [9.9107958696649, 53.559283789852294];
            const map = new mapboxgl.Map({
                container: 'map',
                // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
                style: 'mapbox://styles/mapbox/light-v10',
                center: point,
                zoom: 12
            });
            
            // create the popup
            const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML("<h4>Friedensallee 271</h4><p>Friedensallee 271, 22763 Hamburg, Германия</p>")
            
            // create DOM element for the marker
            const el = document.createElement('div');
            el.id = 'map-pin';
            
            // create the marker
            new mapboxgl.Marker(el)
            .setLngLat(point)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map);
    };
});
document.addEventListener('DOMContentLoaded', () => {
    $(document).on('click', '.js-factsArrow' , function() {
        $(this).toggleClass('open');
        $(this).closest('.js-factsItem').toggleClass('open');
   });
})
document.addEventListener('DOMContentLoaded', () => {
    $(document).on('click', '.js-motivationMore' , function() {
        $(this).toggleClass('open');
        $(this).siblings('.js-motivationItem').toggleClass('open');
   });
})
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.js-popupOpen')) {
        let popupOpeners = document.querySelectorAll('.js-popupOpen');
        popupOpeners.forEach(function(elem) {
            function showPopup() {
                let popups = document.querySelectorAll('.js-popup');
                popups.forEach(function(elem) {
                    elem.classList.add('js-hide');
                    wrapperUnfixPosition();
                    document.querySelector('header').style.display = "";
                })
                let popupId= elem.getAttribute('data-popup');
                let popup = document.querySelector('#' + popupId);
                popup.classList.remove('js-hide');
                popup.classList.add('js-block');
                wrapperFixPosition();
                document.querySelector('header').style.display = "none";
            }
        elem.addEventListener("click", showPopup);
        })
    }
    if(document.querySelector('.js-popupClose')) {
        let popupClose = document.querySelectorAll('.js-popupClose');
        popupClose.forEach(function(elem) {
            function closePopup() {
                elem.closest('.js-popup').classList.remove('js-block');
                elem.closest('.js-popup').classList.add('js-hide');
                wrapperUnfixPosition();
                document.querySelector('header').style.display = "";
            }
        elem.addEventListener("click", closePopup);
        })
    }
    document.addEventListener('keydown', function(e) {
        let popups = document.querySelectorAll('.js-popup');
        if( e.keyCode == 27 ){ 
            popups.forEach(function(elem) {
                elem.classList.remove('js-block');
                elem.classList.add('js-hide');
                wrapperUnfixPosition();
                document.querySelector('header').style.display = "";
            })
        }
    });
    $('.js-closeVideo').on('click', function () {
        $(".js-popup iframe").attr("src", $(".js-popup iframe").attr("src"));
        $(".js-popup video").attr("src", $(".js-popup video").attr("src"));
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $(".js-popup iframe").attr("src", $(".js-popup iframe").attr("src"));
            $(".js-popup video").attr("src", $(".js-popup video").attr("src"));
        }
    });
});

function wrapperFixPosition() {
    const fixBlocks = document.querySelectorAll('.js-fixBlock');
    let paddingOffset = window.innerWidth - document.querySelector('body').offsetWidth + 'px'; 
    setTimeout( function() {
        if ( !document.querySelector('body').hasAttribute('wrapper-body-scroll-fix') ) {
            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            fixBlocks.forEach((el) => {
                el.style.paddingRight = paddingOffset;
            });
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('body').setAttribute('wrapper-body-scroll-fix', scrollPosition);
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('body').style.position = 'fixed';
            document.querySelector('body').style.top = '-' + scrollPosition + 'px';
            document.querySelector('body').style.left = '0';
            document.querySelector('body').style.width = '100%';
            document.querySelector('body').style.paddingRight = paddingOffset;
        }
    }, 15 ); 
}
function wrapperUnfixPosition() {
    const fixBlocks = document.querySelectorAll('.js-fixBlock');
    if ( document.querySelector('body').hasAttribute('wrapper-body-scroll-fix') ) {
        let scrollPosition = document.querySelector('body').getAttribute('wrapper-body-scroll-fix');
        document.querySelector('body').removeAttribute('wrapper-body-scroll-fix');
        document.querySelector('body').style.overflow = '';
        document.querySelector('body').style.position = '';
        document.querySelector('body').style.top = '';
        document.querySelector('body').style.left = '';
        document.querySelector('body').style.width = '';
        window.scroll(0, scrollPosition);
        fixBlocks.forEach((el) => {
            el.style.paddingRight = '0px';
        });
        document.querySelector('body').style.paddingRight = '0px';
    }
}
document.addEventListener('DOMContentLoaded', () => {
  const swiperArticles = new Swiper('.js-newsSlider', {
      direction: 'horizontal',
      slidesPerView: '1',
      centeredSlides: false,
      initialSlide: 1,
      loop: true,
      draggable: true,
      navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false
        },
        993: {
          slidesPerView: 3,
          centeredSlides: true
        },
      }
  });  
  const swiperRecommended = new Swiper('.js-recommendedSlider', {
      direction: 'horizontal',
      slidesPerView: '1',
      loop: true,
      draggable: true,
      navigation: {
        nextEl: '.recommended__next',
        prevEl: '.recommended__prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false
        },
        993: {
          slidesPerView: 3,
          centeredSlides: true
        },
      }
  });  
  if($(window).width() <= 993) {
    const swiperReviews = new Swiper('.js-reviewsSlider', {
        direction: 'horizontal',
        slidesPerView: '1',
        loop: false,
        draggable: true,
        autoHeight: true,
        navigation: {
          nextEl: '.reviews__next',
          prevEl: '.reviews__prev',
        }
    });  
  }
})
document.addEventListener('DOMContentLoaded', () => {
    function starsResult() {
        let starsBlock = document.querySelectorAll('.js-stars');
        starsBlock.forEach(function(elem) {
            let starsResult = elem.querySelectorAll('span');
            starsResult.forEach(function(elem) {
                elem.classList.remove('active');
            });
            let starsCount = elem.getAttribute('data-star');
            for (let i = 0; i < starsCount; i++) {
                starsResult[i].classList.add('active');
            }
        })
    }
    if(document.querySelector('.js-stars')) {
        starsResult();
    }
})
document.addEventListener('DOMContentLoaded', () => {
    class ItcTabs {
        constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
        this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
        }
        _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
        }
        show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
        const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
        elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
        elLinkTarget.classList.add('tabs__btn_active');
        elPaneTarget.classList.add('tabs__pane_show');
        this._elTabs.dispatchEvent(this._eventShow);
        elLinkTarget.focus();
        }
        showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
        };
        _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tabs__btn');
            if (target) {
            e.preventDefault();
            this.show(target);
            }
        });
        }
    }
    if(document.querySelector('.js-teamTabs')) {
        new ItcTabs('.js-teamTabs');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    if ($('#video').length) {
            videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto',
            fluid: 'true'
        });
        var playbutton = $('.js-playVideo');
        $(playbutton).on('click', function(){
            $('.vjs-big-play-button').trigger('click');
          });
    }
})
document.addEventListener('DOMContentLoaded', () => {
    function resizeVideoBg(){
        if($('.js-videoBg').attr('data-video') !== undefined){
            $('.js-videoBg').addClass('video');
            let prp_v = 0.4062;
            let video;
            if($('.js-videoBg video').length >= 1){
                video = $('.js-videoBg video');
            } else {
                video = $('<video autoplay="true" loop="true" preload="auto" muted="muted"><source src="'+$('.js-videoBg').attr('data-video')+'.webm" type="video/webm"><source src="'+$('.js-videoBg').attr('data-video')+'.mp4" type="video/mp4"><source src="'+$('.js-videoBg').attr('data-video')+'.ogv" type="video/ogg"></video>');
            }
            let prp = $(".js-videoBg").outerHeight()/$(".js-videoBg").outerWidth();
            let width,left,top,height = 0;
            if(prp > prp_v) {
                video.css("width",$(".js-videoBg").outerHeight()/prp_v);
                video.css("left",($(".js-videoBg").outerWidth()-$(".js-videoBg video").width())/2);
                video.css("top",0);
            } else {
                video.css("width",'auto');
                video.css("height",$(".js-videoBg").width()*prp_v);
                video.css("top",($(".js-videoBg").outerHeight()-$(".js-videoBg video").height())/2);
                video.css("left",0);
            }
            $('.js-videoBg').prepend(video);
        }
    }
    $(window).on('load',function(){
        if($(window).width() >= 993) {
            resizeVideoBg();
        }
    });
    $(window).resize(function(){
        if($(window).width() >= 993) {
            resizeVideoBg();
        }
    });
})