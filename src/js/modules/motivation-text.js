document.addEventListener('DOMContentLoaded', () => {
    $(document).on('click', '.js-motivationMore' , function() {
        $(this).toggleClass('open');
        $(this).siblings('.js-motivationItem').toggleClass('open');
   });
})