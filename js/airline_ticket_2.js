$(function(){
  /*카드 선택 */


  /*
   $(".class_sel .card_contents").on("click",function(){
     var myReply = $(this).prev("div");
     if (myReply.is(":hidden")){
       $(".class_sel .card_contents").removeClass("selectOn");
       $(this).addClass("on");
       $(".language:visible").slideUp("fast");
       myReply.show("2000");
     } else{
       $(".class_sel .card_contents").removeClass("selectOn");
       $(myReply).slideUp("2000");
     }
   });
   */





  /*더보기 버튼*/ 
  $(".seat_class button.benefit_more").on("click",function(){
    var myReply = $(this).prev("div").parent().find(".card_more");
    if (myReply.is(":hidden")){
      $(".seat_class button.benefit_more").removeClass("on");
      $(this).addClass("on");
      myReply.slideDown("2000");
    } else{
      $(".seat_class button.benefit_more").removeClass("on");
      $(myReply).slideUp("2000");
    }
  });

  var class_sel_handler = function(e) {
      e.preventDefault();
      var ts = $(this);
      $(".selected_click+div:visible").hide();
      ts.parent().next().show();
  }
  $(document).on("click",".mobile .class_sel_wrap button",class_sel_handler);

  /**/
  
  $(".class_sel_wrap a").on("click",function(e){
    e.preventDefault();
    var mySelected = $(".card_selected", this)
    $(".class_sel").css({"margin-top":"30px"});
    $(".class_sel",this).css({"margin-top":0});

    $(".card_selected:visible").hide();
    $(".card_selected",this).show();
    $(".class_sel_wrap a.selectActive").removeClass('selectActive');
    $(this).addClass("selectActive");      
  });
});