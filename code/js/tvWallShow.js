$(function(){

/*电视墙弹出与缩回的js*/
var tagShow=1;
var gotoBar=document.getElementById('gotoBar');
var oNavTvWall=document.getElementById("navTvWall");
var oNavIndex=document.getElementById("navIndex");

oNavTvWall.onclick=function(){
	showTvWall();
	tagShow=0;
}

oNavIndex.onclick=function(){
	hideTvWall();
	tagShow=1;
}
function showTvWall(){	
	$("#tvwallInner").stop().load("../html/tvwall.php",function(){
		$("title").html("天津大学IPTV电视墙");
		var mainH=$(".main").outerHeight();
		var scrollH=mainH;
		$("body").animate({scrollTop:scrollH},300);
		$("#navTvWall").addClass("curNavbg");
		$("#navIndex").removeClass("curNavbg");
	});
}


function hideTvWall(){
	$("#navTvWall").removeClass("curNavbg");
	$("#navIndex").addClass("curNavbg");
	$("body").animate({scrollTop:"0"},300,function(){
		$("#tvwallInner").empty();		
	});
}



})