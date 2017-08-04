var env = {
    api : 'http://localhost:3000'
};
function onError() {
    console.log(arguments);
}
;(function($) {
    
    $('[data-load]').each(function() {
        $(this).load($(this).data('load'));
    });

})(jQuery);