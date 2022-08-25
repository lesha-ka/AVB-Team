document.addEventListener('DOMContentLoaded', () => {
    $(document).on('click', '.js-factsArrow' , function() {
        $(this).toggleClass('open');
        $(this).closest('.js-factsItem').toggleClass('open');
   });
})