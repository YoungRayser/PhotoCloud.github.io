type="text/javascript"
    function slowScroll(id) { 
        var offset = 0;
        $('html, body').animate({ 
                scrollTop: $(id).offset().top - offset 
        }, 1000);
        return false; 
    } 

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});
    
$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});


