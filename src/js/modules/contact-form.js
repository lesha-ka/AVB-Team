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