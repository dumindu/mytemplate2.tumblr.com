$(function() {
	window.prettyPrint && prettyPrint();
	$("figure").fitVids();
	
	var nanoScroller = $(".nano").nanoScroller();
	
	$('.pagination').jqPagination({
		paged: function(page) {
			window.location.replace('http://mytemplate2.tumblr.com/page/'+page);
		}
	});
	
	//hide tumblr controls
	$("#tumblr_controls").remove();
	//Back to Top
	$(".back_to_top").click(function(){
		nanoScroller.nanoScroller({ scroll: 'top' });
	});
});
