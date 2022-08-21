document.addEventListener('DOMContentLoaded', () => {
    if ($('#video').lenght) {
        videojs('video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });
        var playbutton = $('.js-playVideo');
        $(playbutton).on('click', function(){
            console.log('123')
            $('.vjs-big-play-button').trigger('click');
          });
    }
})