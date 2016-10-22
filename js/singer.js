// JavaScript Document

/*签到模块日期捕捉：*/
function week(){
	var objDate= new Date();
	var week = objDate.getDay();
	switch(week)
		{
			case 0:
			week="周日";
			break;
			case 1:
			week="周一";
			break;
			case 2:
			week="周二";
			break;
			case 3:
			week="周三";
			break;
			case 4:
			week="周四";
			break;
			case 5:
			week="周五";
			break;
			case 6:
			week="周六";
			break;
		}
	$(".sing_for_number").html( week );
}

$(document).ready(function(){
	week();
	$(".singer_r_img").click(function(){
		$(this).addClass("current");
	})
})

$(document).ready(function(){
	$(".sing_for_number")
})

