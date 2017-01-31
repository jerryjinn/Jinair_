
$(function(){
	$(".psn_info_list a").on("click",function(e){
		var myReply = $(this).parent().next();
		e.preventDefault();
		if (myReply.is(":hidden")){
			$(".psn_info_list a").removeClass("on");
			$(this).addClass("on");
			$(".psn_info_list dd:visible").slideUp("fast");
			myReply.slideDown("fast");
		} else{
			$(".psn_info_list a").removeClass("on");
			$(".psn_info_list dd:visible").slideUp("fast");
		}
	});
});

