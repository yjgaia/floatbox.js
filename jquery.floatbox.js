jQuery.fn.floatbox = function() {
	$(this).find('.__floatbox_clearboth').remove();
	$(this).append('<div class="__floatbox_clearboth" style="clear:both" />');
};
jQuery(function() {
	jQuery('.floatbox').floatbox();
});
