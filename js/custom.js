(function ($) {

    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    
    $(window).scroll();

    lightbox.option({
      'showImageNumberLabel': false
    });

    $(document).ready(function() {
        $('#interiorCarousel').carousel({
            interval: 10000
        })
    });

    var feedbackWaypoint = new Waypoint({
      element: document.getElementById('feedback'),
      handler: function() {
        this.disable();
        VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
      },
      offset: 'bottom-in-view'
    });
    
    var panoramaWaypoint = new Waypoint({
      element: document.getElementById('panorama_anchor'),
      handler: function() {
        this.disable();
        $("#panorama").pano({
            img: "/img/interior/1-8.jpg",
            interval: 100,
            speed: 50
        });
      },
      offset: 'bottom-in-view'
    });

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    $('.contactForm').validate();
})(jQuery);