// JavaScript Document
/*二级导航*/
$(".leftsidebar_box dt").css({"background-color":"#F8F8F8"});
$(".leftsidebar_box dt img").attr("src","images/select_xl01.png");

$(function(){
	$(".leftsidebar_box dd").hide();
	$(".leftsidebar_box dt").click(function(){
		$(".leftsidebar_box dt").css({"background-color":"#F8F8F8"})
		$(this).css({"background-color": "#5DAEE5"});
		$(this).parent().find('dd').removeClass("menu_chioce");
		$(".leftsidebar_box dt img").attr("src","images/select_xl01.png");
		$(this).parent().find('img').attr("src","images/select_xl.png");
		$(".menu_chioce").slideUp(); 
		$(this).parent().find('dd').slideToggle();
		$(this).parent().find('dd').addClass("menu_chioce");
	});
})