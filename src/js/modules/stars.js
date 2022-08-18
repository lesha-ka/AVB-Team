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