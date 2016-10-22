// JavaScript Document

	/*隔行换色*/
	     $('.tablelist tbody tr:odd').addClass('odd'); 


      /*全选*/
	  function selectAll(){
			var a = document.getElementsByTagName("input");
			if(a[0].checked){
			for(var i=0;i<a.length;i++){
				
					if(a[i].type == "checkbox") a[i].checked = false;
					
			}
	      }
	        else{
				
				 for(var i=0;i<a.length;i++){
						
					  if(a[i].type == "checkbox") a[i].checked = true;
					
				}
		}
	}

	/*反选*/
	 function inverseCkb(items){
         $('[name='+items+']:checkbox').each(function(){
             this.checked=!this.checked;
         });
     }


     

$(function(){
    $(".testBg_lf").height($(window).height()).width($(window).width());//使遮罩的背景覆盖整个页面
	
	$(".tablelink_lf").click(function(){
        $(".testBg_lf").show();
		$(".tip_ben_lf").show();
        showiv();
    }) 
	       
	$(".span_img_lf").click(function(){
        $(".testBg_lf").hide();
		 $(".tip_ben_lf").hide();
        showiv();
    })   

   })
function showiv(){
        
    var testContTop=($(window).height()-$(".tip_ben_lf").height())/2;  //计算弹出的框距离页面顶部的距离
    var testContWidth=($(window).width()-$(".tip_ben_lf").width())/2;  //计算弹出的框距离页面左边的距离
    $(".tip_ben_lf").css({
        "top":testContTop,
        "left":testContWidth
    });
}

    




$(function(){
    $(".testBg_lf").height($(window).height()).width($(window).width());//使遮罩的背景覆盖整个页
    
    $(".span_b_lf").click(function(){
        $(".testBg_lf").show();
		$(".tip_lf").show();
        showDiv();
    }) 
	       
	$(".span_img_lf").click(function(){
        $(".testBg_lf").hide();
		 $(".tip_lf").hide();
        showDiv();
    })   
   })
function showDiv(){
        
    var testContTop=($(window).height()-$(".tip_lf").height())/2;  //计算弹出的框距离页面顶部的距离
    var testContWidth=($(window).width()-$(".tip_lf").width())/2;  //计算弹出的框距离页面左边的距离
    $(".tip_lf").css({
        "top":testContTop,
        "left":testContWidth
    });
}



$(function(){
    $(".testBg_lf").height($(window).height()).width($(window).width());//使遮罩的背景覆盖整个页
    
    $(".span_a_lf").click(function(){
        $(".testBg_lf").show();
		$(".tip_lf").show();
        showDiv();
    }) 
	       
	$(".span_img_lf").click(function(){
        $(".testBg_lf").hide();
		 $(".tip_lf").hide();
        showDiv();
    })   
   })
function showDiv(){
        
    var testContTop=($(window).height()-$(".tip_lf").height())/2;  //计算弹出的框距离页面顶部的距离
    var testContWidth=($(window).width()-$(".tip_lf").width())/2;  //计算弹出的框距离页面左边的距离
    $(".tip_lf").css({
        "top":testContTop,
        "left":testContWidth
    });
}
