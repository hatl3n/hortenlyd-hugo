$(document).ready(function(){
    var images = [];
    var texts = [];
    $.each($backstretch_images, function(key, value){
        images.push(value);
        //mages.push(value);
    });
    $('#backstretch').backstretch(images, {duration: 4000, fade: 750});
});

$(window).on("backstretch.before", function(e, instance){
    var container = $('#backstretch-overlay');
    if(container.is(':visible'))
        container.fadeOut();
});
$(window).on("backstretch.after", function(e, instance){
    var text = $backstretch_texts[instance.index];
    var container = $('#backstretch-overlay');
    container.find('.bildetittel').text(text['title']);
    container.find('.sub-text').text(text['sub_text']);
    container.fadeIn();
});

/* For å gå frem og tilbake i slides */
$('#backstretch-prev').click(function(e){
	e.preventDefault();
	$('#backstretch').data('backstretch').prev();
});
$('#backstretch-next').click(function(e){
	e.preventDefault();
	$('#backstretch').data('backstretch').next();
});
$(document).keydown(function(e) {
	if (e.which == 37) {
		$('#backstretch').data('backstretch').prev();
	}
	if (e.which == 39) {
		$('#backstretch').data('backstretch').next();
	}
});
