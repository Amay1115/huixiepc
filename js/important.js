// JavaScript Document
/*重要事项*/
$(document).ready(function () {
	var $box = $('.box');
	$('.metro li').each(function () {
		var color = $(this).css('backgroundColor');
		var content = $(this).html();
		$(this).click(function () {
			$box.css('backgroundColor', color);
			$box.addClass('open');
			$box.find('p').html(content);
		});
		$('.close').click(function () {
			$box.removeClass('open');
			$box.css('backgroundColor', 'transparent');
		});
	});
});