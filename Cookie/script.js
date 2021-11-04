$(document).ready(function() {
    $('img').hover(function(){
        var $this = $(this);
        var image = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', image);
    })
});