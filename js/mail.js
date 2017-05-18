(function ($) {
    $( ".contactForm" ).submit(function( event ) {
        event.preventDefault();

        if ($('.contactForm').valid()) {
            $('.contactForm').find(':submit').html('Идет отправка сообщения...');
            $('.contactForm').find(':submit').prop('disabled', true);
            var data = $('.contactForm').serializeArray().reduce(function(obj, item) {
                if (item.value != "") {
                    obj[item.name] = item.value;
                }
                return obj;
            }, {});

            $.ajax({
                url: "https://formspree.io/mail@klimadent.ru",
                method: "POST",
                data: data,
                dataType: "json"
            }).done(
                function() {
                    $('#sendmessage').show();
                    $( '.contactForm' ).each(function(){
                        this.reset();
                    });
                    $('.contactForm').find(':submit').html('Отправить');
                    $('.contactForm').find(':submit').prop('disabled', false);
                }
            );
        }
    });

    $.validator.addMethod("phone", function(value) {
            return value == "" || value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        }, "Пожалуйста введите номер телефона в формате +7**********");
})(jQuery);