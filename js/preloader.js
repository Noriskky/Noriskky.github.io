$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
        // Once the container has finished, the scroll appears
        if ($('body').hasClass('loaded')) {
            // It is so that once the container is gone, the entire preloader section is deleted
            $('.wrapper').delay(9000).queue(function() {
                $(this).remove();
            });}
    }, 3000);});