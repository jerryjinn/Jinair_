$(function(){

  /*슬라이드*/
  $(".mySlide_1").bxSlider({auto:true, autoControls:true,pager:true});


  /*more 창 열리기*/
  $(".item button.more_button").on("click",function(){
    $(this)
   var myReply = $(this).closest(".item").find(".details_wrap");
   console.log(myReply);
   if (myReply.is(":hidden")){
     $(".sign_in:visible").slideUp("fast");
     myReply.slideDown(500);
   } else{
     $("#util_menu ul li .register").removeClass("on");
     myReply.slideUp(500);
   }
  });
});