
/*
  *@addEvnt(evObj,evName,evH) : 이벤트 등록 메서드
  *@evObj{object} : 이벤트 대상
  *@evName{string} : 이벤트 명
  *@evH{fuction} : 이벤트 핸들러

*/
function addEvnt(evObj,evName,evH){
    var arrEvnt = evName.split(" ");
    //console.log(arrEvnt);
    for(var i =0; i < arrEvnt.length; i++){
      if(document.addEventListener){
        evObj.addEventListener(arrEvnt[i], evH );
      }else { //ie8이하
        evObj.attachEvent("on" + arrEvnt[i], evH);
    }
  }   
}
$(function(){



  /*스크롤시 헤더 메뉴 슬라이드*/
      
      $(window).on("scroll",function(){
        var scT = $(this).scrollTop();
        var header  = $(".pc #header");
        if($(window).scrollTop() >= 90 ){
          header.addClass("active");
          //header.css({marginTop: + $(window).scrollTop() + "px"});
        } else{
          header.removeClass();
          header.css({marginTop: + 0 + "px"});
        }
      });
      $("#header button.m_btn_gnb").on("click",function(){
        var header  = $(".pc #header");
        header.removeClass("active");
        header.css({display:"block"});
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

    /*로그인 유효성 검사*/
    var frm_log = document.querySelector(".login_wrap form");
    function loginAlt(a,b){
      alert("로그인 정보가 일치하지 않습니다.");
      a.value = "";
      b.value = "";
      a.focus();
    }

    function chkLogin(e){
      e.preventDefault();//액션페이지로 이동안하게 막아줌 
      //alert(1343);
      var reg_id = /^[a-z]{1}\w{7,11}$/g;
      var reg_pw= /^\w{6,12}$/g;
      var id_1 = "abcde2016";
      var pw_1 = "1234567";
      var inp_id = frm_log.user_id;
      var inp_pw = frm_log.user_pw;
      
      var result_id = reg_id.exec(inp_id.value);
      var result_pw = reg_pw.exec(inp_pw.value);
      // !(result_id && result_pw)
      if(result_id == null || result_pw == null){
        if(result_id == null ){
          alert("아이디 형식이 잘못되었습니다.");
          inp_id.value = "";
          inp_id.focus(); 
        } else if (result_pw == null){
          alert("비밀번호 형식이 잘못되었습니다.");
          inp_pw.value = "";
          inp_pw.focus(); 
        }
      return false;
      }
      if(inp_id.value == id_1){
        if(inp_pw.value != pw_1){
          loginAlt(inp_id,inp_pw);
          return false;
        }
      } else {
        loginAlt(inp_id,inp_pw);
        return false;
      }
      frm_log.submit();
    }
    addEvnt(frm_log,"submit", chkLogin);


  /*
  @Evnet:사이즈 감지 이벤트
  */
  var i = 0;
  $(window).on("resize",function(){
    var b = $("body");
    var w = $(window).width()+17;
    if( w > 1024){
      $("#gnb").attr("style","");
      $(".dim_gnb").attr("style","");
      b.attr("class","");
      b.addClass("pc");

    } else if(w > 767 && w <= 1024){
      b.attr("class","");
      b.addClass("tablet");
    } else{
      b.attr("class","");
      b.addClass("mobile");
    }   
  });

  /*datepicker*/
  $( function() {
     $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
        '7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토']  ,
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '',
        showOn: 'both',
        buttonText: "",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: false,
        yearRange: 'c-1:c+1'
    };
    $("#datepicker,#datepicker_2").datepicker();
    $.datepicker.setDefaults($.datepicker.regional['ko']);
     /*기능 및 한글*/ 
    var datepicker_default = {
        showOn: 'both',
        buttonText: "",
        currentText: "이번달",
        changeMonth: true,
        //false로 바꾹면 고정 
        changeYear: true,
        showButtonPanel: false,
        yearRange: 'c-1:c+1',
        showOtherMonths: true,
        selectOtherMonths: true
    }
    $("#sdate").datepicker(datepicker_default);  
    $("#calendar").datepicker(datepicker_default);

  });


  /*mobile-login슬라이드*/
  $.fn.rsLogin = function(opt){
    var mode = opt.mode;
    var ts = $(this);
    if(mode == "pc tablet mobile"){
      var selector3 = "#"+ts.attr("id")+",.tablet"+" #"+ts.attr("id");
      $(document).on("mouseleave", selector3, function(){
        $("ul",this).find("ul:visible").hide()
        .end().find("a.on").removeClass("on");
      });
    }
    $(document).on("click",".m_signin_btn",function(){
      $(".sign_in").animate({right:0},500);
      $(".sign_in").css({"display":"block"});
      $(".dim_gnb").fadeIn("fast");
    });
    $(document).on("click",".mobile_sign_in_close",function(){
      $(".sign_in").animate({right:"-800px"},500);
      $(".dim_gnb").fadeOut("fast");
    });
  }
  $(function(){
      $(window).resize();
      $("#util_menu").rsLogin({mode:"pc tablet mobile"});
    });


  /*반응형 GNB*/
  $.fn.rsGnb = function(opt){
    var mode = opt.mode;
    var ts = $(this);
    if(mode == "pc tablet mobile"){
      var selector = "#"+ts.attr("id")+">ul>li>a" + ",.tablet"+" #"+ts.attr("id")+">ul>li>a";
      //console.log(selector);
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
      $("#gnb").animate({left:"-800px"},500);
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
    //console.log(this.myObj + " h3 a, " + this.myObj + " h4 a");
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

/*top버튼*/      
      $(window).on("scroll",function(){
        var scT = $(this).scrollTop();
        var topBtn  = $("#footer .btn_top img");
        if($(window).scrollTop() >= 1000 ){
          topBtn.css({display:"block"});
        } else{
          topBtn.css({display:"none"});
        }
      });
 
});




