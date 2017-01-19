$(function(){



  /*스크롤시 헤더 메뉴 슬라이드*/
      
      $(window).on("scroll",function(){
        var scT = $(this).scrollTop();
        var header  = $("#header");
        if($(window).scrollTop() >= 90 ){
          header.addClass("active");
          //header.css({marginTop: + $(window).scrollTop() + "px"});
        } else{
          header.removeClass();
          header.css({marginTop: + 0 + "px"});
        }
      });


 
   /*로그인, LANGUAGE 창 열리기*/
  $("#util_menu a.register").on("click",function(){
   var myReply = $(this).closest("#header_top").next();
   if (myReply.is(":hidden")){
     $("#util_menu ul li .register").removeClass("on");
     $(this).addClass("on");
     $(".sign_in:visible").slideUp("fast");
     myReply.slideDown("fast");
   } else{
     $("#util_menu ul li .register").removeClass("on");
     $(".sign_in:visible").slideUp("fast");
   }
  });
  $("#util_menu ul li:first-child a").on("click",function(){
   var myReply = $(this).closest("header").prev();
   if (myReply.is(":hidden")){
     $("#util_menu ul li:first-child a").removeClass("on");
     $(this).addClass("on");
     $(".language:visible").slideUp("fast");
     myReply.slideDown("fast");
   } else{
     $("#util_menu ul li:first-child a").removeClass("on");
     $(".language").slideUp("fast");
   }
  });

   /*placeholder사라짐*/


  /*
  @Evnet:사이즈 감지 이벤트
  */
  var i = 0;
  $(window).on("resize",function(){
    var b = $("body");
    var w = $(window).width()+17;
    if( w >= 1024){
      $("#gnb").attr("style","");
      $(".dim_gnb").attr("style","");
      b.attr("class","");
      b.addClass("pc");

    } else if(w >= 767 && w < 1024){
      b.attr("class","");
      b.addClass("tablet");
    } else{
      b.attr("class","");
      b.addClass("mobile");
    }   
  });
  /*반응형 GNB*/
  $.fn.rsGnb = function(opt){
    var mode = opt.mode;
    var ts = $(this);
    if(mode == "pc tablet mobile"){
      var selector = "#"+ts.attr("id")+">ul>li>a" + ",.tablet"+" #"+ts.attr("id")+">ul>li>a";
      console.log(selector);
      $(document).on("mouseover focus",selector,function(){
        var myThis = $(this);
        $(this).closest("ul").find("ul:visible").hide()
        .end().find("a.on").removeClass("on");
        myThis.next().show();
        $(this).addClass("on");
      });
      var selector2 = "#"+ts.attr("id")+",.tablet"+" #"+ts.attr("id");
      $(document).on("mouseleave", selector2, function(){
        $("ul",this).find("ul:visible").hide()
        .end().find("a.on").removeClass("on");
      });
    }
    $(document).on("click",".m_btn_gnb",function(){
      $("#gnb").animate({left:0},500);
      $(".dim_gnb").fadeIn("fast");
    });
    $(document).on("click",".mobile_gnb_close",function(){
      $("#gnb").animate({left:"-500px"},500);
      $(".dim_gnb").fadeOut("fast");
    });
  }
  $(function(){
      $(window).resize();
      $("#gnb").rsGnb({mode:"pc tablet mobile"});
    });
  /*탭메뉴 */
  function TabmenuFnc(objName,idx){
    this.myObjName = objName;
    this.myIdx = idx;
    this.myObj = this.myObjName + ":eq("+this.myIdx+")";
    this.actButton = $(this.myObj).find("h3:first button.tab_btn, h4:first button.tab_btn");
    this.bindEvent();
  }
  TabmenuFnc.prototype.bindEvent = function(){
    console.log(this.myObj + " h3 a, " + this.myObj + " h4 a");
    $(document).on("click",this.myObj + " h3 button.tab_btn, " + this.myObj + " h4 button.tab_btn",$.proxy(this.tabEvntHnd,this)); // $.proxy( ㅇ ,this);
  };
  TabmenuFnc.prototype.tabEvntHnd = function(e){
    e.preventDefault();
    var $myButton = $(e.target);
    var $myThis = $(e.target).closest("button");
    var $myDiv = $myThis.parent().next();
    var $visibleDiv = $(this.myObj+ " .main_tab h4+div:visible")
    //console.log(e.myThis);
    //alert(34);
    //보이는 div 요소는 숨겨라
    
    //클릭한 탭에 해당하는 div는 보여라
    if($myDiv.is(":hidden")){
      $visibleDiv.hide();
      $myDiv.show();
      var btn_1 = this.actButton.css({"background":"#4c4c4c"}).css({"color":"#ebedec"});
      this.actButton.css("btn_1");
      var btn_2 = $myButton.css({"background":"#ebedec"}).css({"color":"#4c4c4c"});
      $myButton.attr("btn_2");
      this.actButton = $myButton;
    }
  } 

  /*
  var t1 = new TabmenuFnc();
  var t2 = new TabmenuFnc(); 
  //쓰는 대신 배열로 쓴다.  
  */
  //var t1 = new TabmenuFnc(); //객체생성할 때 new 써주어야함
  //each메서드는 로딩이 된 후 사용가능하다
    $(function(){
      //console.log($("div[data-type=tabmenu]"));
      var arrTab = [];
      var tabText = "div[data-type=tabmenu]";

      var tabMenuWrap = $("div[data-type=tabmenu]");
      $.each(tabMenuWrap,function(i,o){
        arrTab[i] = new TabmenuFnc(tabText, i);   
      });
      //console.log(arrTab);
    });



 
});




