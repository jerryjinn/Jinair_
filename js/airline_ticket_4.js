/*레이어 팝업*/
(function(){
	$.fn.layerPopup = function(){
		var ts = $(this);
		var openLayer = function(e){
			e.preventDefault();
			var url = $(this).attr("href")
			$.get(url,function(data){
			//console.log(data); 방법2
			var el_1 = $("<div>",{"class":"pop_dim"});
			var el_2 = $("<div>",{"class":"pop_inner_wrap"}).appendTo(el_1);
			var el_3 = $("<div>",{"class":"pop_inner"}).appendTo(el_2);
			$(("<button/>"),{"class":"btnCloseLayer","text":"X"}).appendTo(el_3);
			el_3.prepend(data);
			$("body").append(el_1);
			});//data는 아무거나 넣얻됨
			$(document).on("click",".btnCloseLayer",function(){	
				$(".pop_dim").remove();
			});
		};

		ts.on("click",openLayer);
	}
	$(function(){
		$("a[data-type=layerPopup]").layerPopup();
	});
}());