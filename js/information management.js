// JavaScript Document
 $(document).ready(function(e) {
	$("table>tbody>tr:odd").css("background-color","#e9f4fe");
});
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