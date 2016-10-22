// JavaScript Document
$( document ).ready(function() {
      $( '.sidebar' ).simpleSidebar({
            settings: {
               opener: '.open-sb',
               wrapper: '.wrapper',
               animation: {
                 duration: 500,
                 easing: 'easeOutQuint'
               }
           },
           sidebar: {
              align: 'left',
              width: 217,
              closingLinks: 'a',
           }
    });
 });
		
$(".open-sb").click(function(){
       $(".left_add").slideToggle(500);
 });