$(function(){
var winScroll=$(window).scrollTop(),
	mainH=$(".main").outerHeight(),
	winH=$(window).height(),
	tvwallContainerH=$(".tvwallContainer").outerHeight();
	headerH=$(".header").outerHeight();
var line=$(".line");

var sideNav_1=$("#sideNav_1"),
	sideNav_2=$("#sideNav_2"),
	sideNav_3=$("#sideNav_3");

var listDetail_1=$("#listDetail_1"),
	listDetail_2=$("#listDetail_2"),
	listDetail_3=$("#listDetail_3");

var oSideNav=document.getElementById('sideNav');
var oSideNavLi=oSideNav.getElementsByTagName('li');
oSideNav.onclick=function(e){
	var e=e||window.event;
	var curEle=e.target||e.srcElement;
	for (var i = 0; i < oSideNavLi.length; i++) {
		if(oSideNavLi[i]==curEle){
			$("body").scrollTop(winH+i*584);
		}
	}
}



})