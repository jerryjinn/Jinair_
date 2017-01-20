$(function(){
	var tdIdx;
	var trIdx;
	$(document).on("click",".std_section td:not(:contains('이용불가'))", function(){
		$(".std_section th.activeBg, .std_section td.activeBg").removeClass("activeBg");
		$(".returning th").eq(tdIdx+1).addClass("activeBg");
		$(".std_section tr").not(":first").eq(trIdx).find("th:first").addClass("activeBg");
		$(this).addClass("activeBg");
	});
	$(document).on("mouseover focus",".std_section td", function(){
		var ts = $(this);
		tdIdx = ts.parent().find("td").index($(this));//가로(행) row 
		trIdx = ts.parent().parent().find("tr").not(":first").index(ts.parent());//세로(열) col
		console.log(tdIdx);
		var trTag = $(".std_section tr").not(":first");//행 row
		$(".std_section td.VerticalLine").removeClass("VerticalLine");
		$(".std_section td.HorizonLine").removeClass("HorizonLine");
		//console.log(trTag.length);
		$.each(trTag, function(i, o){
			if(i <= trIdx) {
				$(".std_section tr").not(":first").eq(i).find("td").eq(tdIdx).addClass("VerticalLine");//가로선
			}
		});

		var overLineTd = ts.parent().find("td:lt(" + (tdIdx+1) + ")").addClass("HorizonLine");


		//$(".returning th").eq(tdIdx).addClass("activeBg");
		//$(this:not(:contains('이용불가')).css({"cursor":"pointer"});
		$(".std_section td:not(:contains('이용불가'))").css({"cursor":"pointer"});
	});	
});