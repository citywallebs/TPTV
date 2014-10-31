window.onload=function(){
	function setHeight(){
		var headerH=$(".header").outerHeight(),
			footerH=$(".footer").outerHeight(),
			mainH=$(".main").height()+1;
		var winH=document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight;
		var setHeight=Math.floor((winH-headerH-footerH-mainH)/2);
		if (setHeight>=30) {
			$(".main").css({"padding-top":setHeight,"padding-bottom":setHeight});
		}else{
			return false;
		}
	}

	setHeight();

	window.onresize=function(){
		setHeight();
	}

}
