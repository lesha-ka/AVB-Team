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