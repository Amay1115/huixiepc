// JavaScript Document
$(function(){
	/**软件功能切换js**/
	$(".soft_con_icon ul li a").mouseover(function(){
		var id = $(this).attr("id");
		var x=$(this).parent().index();
		$(this).children("p").css({"color":"#008dd9"}).parent().parent().siblings().children().children("p").css({"color":"#333333"});
		var src1=id+"_hover.gif"
		$(".soft_con_icon ul li a").each(function(index, element) {
         	var other_id = $(this).attr("id");
			if(id == other_id){
			   $(this).children("img").attr("src","images/"+src1);
			}else{
			   var src2 = other_id+".gif";
			   $(this).children("img").attr("src","images/"+src2);
			}
        });
		if(x==0){
		   $("#xzgl").css({"display":"block"}).siblings().css({"display":"none"});
		   $(".soft_con1").css({"background":" url(images/line_select_001.gif)"});
		}else if(x==1){
		   $("#crm").css({"display":"block"}).siblings().css({"display":"none"});
		   $(".soft_con1").css({"background":"url(images/line_select_002.gif)"});
		}else if(x==2){
		   $("#xmgl").css({"display":"block"}).siblings().css({"display":"none"});
		   $(".soft_con1").css({"background":"url(images/line_select_003.gif)"});
		}else if(x==3){
		   $("#zsgl").css({"display":"block"}).siblings().css({"display":"none"});
		   $(".soft_con1").css({"background":"url(images/line_select_004.gif)"});
		}else{
		   $("#ydbg").css({"display":"block"}).siblings().css({"display":"none"});
		   $(".soft_con1").css({"background":"url(images/line_select_005.gif)"});
		}
	});
	
});