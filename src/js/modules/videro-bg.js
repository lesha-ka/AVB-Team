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