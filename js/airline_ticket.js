$(function(){
	var tdIdx;
	var trIdx;
	$(document).on("click",".std_section td:not(:contains('이용불가'))", function(){
		$(".std_section th.activeBg, .std_section td.activeBg").removeClass("activeBg");
		$(".returning th").eq(tdIdx).addClass("activeBg");
		$(".std_section tr").not(":first").eq(trIdx).find("th:first").addClass("activeBg");
		$(this).addClass("activeBg");
	});
	$(document).on("mouseover focus",".std_section td", function(){
		var ts = $(this);
		tdIdx = ts.parent().find("td").index($(this));
		trIdx = ts.parent().parent().find("tr").not(":first").index(ts.parent());
		console.log(tdIdx);
		var trTag = $(".std_section tr").not(":first");
		$(".std_section td.VerticalLine").removeClass("VerticalLine");
		$(".std_section td.HorizonLine").removeClass("HorizonLine");
		//console.log(trTag.length);
		$.each(trTag, function(i, o){
			if(i <= trIdx) {
				$(".std_section tr").not(":first").eq(i).find("td").eq(tdIdx).addClass("VerticalLine");
			}
		});

		var overLineTd = ts.parent().find("td:lt(" + (tdIdx+1) + ")").addClass('HorizonLine');


		//$(".returning th").eq(tdIdx).addClass("activeBg");
		//$(this:not(:contains('이용불가')).css("cursor", "pointer"); //왜
	});	
});