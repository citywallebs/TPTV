
$(function(){

var animatemyd=false;
function channelTab(){
	var oNav=document.getElementById("cateNav");
	var oNavLis=oNav.getElementsByTagName("li");
	var oCateBox=document.getElementById("cateBox");
	var oCateBoxLis=oCateBox.getElementsByTagName("ul");
	var oAllBox=document.getElementById("allBox");
	var oChatBox=document.getElementById("chatBox");
	oNav.onclick=function(e){
		if (tagChatBoxToggle==0) {
			tagChatBoxToggle=1;
			animatemy("top",40,481,oChatBox);
			animatemyd=false;
		}
		var e=e||window.event;
		var curEle=e.target||e.srcElement;
		for (var i = 0; i < oNavLis.length; i++) {
			oNavLis[i].className="";
			if (oNavLis[i]==curEle&&animatemyd==false) {
				oNavLis[i].className="curCateNav";
				animatemy("left",parseInt(oAllBox.style["left"]),(-i*332),oAllBox);								
			}
		}
	}
}

function animatemy(attr,oldLength,newLength,obj){
	animatemyd=true;
	var interval=10;//位移间隔时间
	var time=300;//w位移总时间
	var length=newLength-oldLength;//位移距离
	var speed=Math.floor(length/(time/interval));
	(function go(){
		if ((speed<0&&parseInt(obj.style[attr])>newLength)||(speed>0&&parseInt(obj.style[attr])<newLength)) {
			obj.style[attr] =parseInt(obj.style[attr]) + speed +"px" ;
			setTimeout(go,interval);
		}else{
			animatemyd=false;
			obj.style[attr]=newLength+"px";
		}
	})();


}

channelTab();

function channelClick(){
	var oAllBox=document.getElementById("allBox");
	var oLinks=oAllBox.getElementsByTagName("a");
	oAllBox.onclick=function(e){
		var e=e||window.event;
		var curEle=e.target||e.srcElement;
		//alert(curEle.tagName);
		//console.log(curEle);
		if (curEle.tagName==="A") {
			for (var i = 0; i < oLinks.length; i++) {
				oLinks[i].className="";
				if (oLinks[i]==curEle) {
					oLinks[i].className="curChannel";
				}
			}
		}else{
			return;
		}

	}
}
channelClick();

var tagChatBoxToggle=1;
var tagLight=1;
var tagSentMessage=0;

(function toggleChatBox(){
	var chatBox=document.getElementById("chatBox");
	var chatHead=document.getElementById('chatHead');
	var chatMain=document.getElementById('chatMain');
	chatHead.onclick=function(){

		if (tagChatBoxToggle==0) {
			tagChatBoxToggle=1;
			animatemy("top",40,481,chatBox);
		}else{
			tagChatBoxToggle=0;
			animatemy("top",481,40,chatBox);
		}
	}
})();

(function toggleLight(){
	var oHideBg=document.getElementById("hideBg");
	var lightControl=document.getElementById("lightControl");
	var oPlayerBox=document.getElementById("playerBox");
	lightControl.onclick=function(){
		if (tagLight==1) {
			tagLight=0;
			oHideBg.style.display="block";
//			lightControl.style.backgroundColor="#000";
			oPlayerBox.style.zIndex="9999999";
			lightControl.style.zIndex="9999998";
		}else{
			tagLight=1;
			oHideBg.style.display="none";
			oPlayerBox.style.zIndex ="99997";
			lightControl.style.zIndex="99996";
		}
	}
	
})();


var chatArea=document.getElementById("chatArea");
var chatContent=chatArea.value;
var oSubmit=document.getElementById("chatSubmit");
var oUsername=document.getElementById("username");

chatArea.onfocus=function(){
	chatArea.value=(chatArea.value=="留下你的态度,不过可不能太过哦~~")?"":chatArea.value;
	chatArea.style.color="#222";
}
chatArea.onblur=function(){
	chatArea.value=(chatArea.value=="")?"留下你的态度,不过可不能太过哦~~":chatArea.value;
	chatArea.style.color="#BBB";
}

chatArea.onkeyup=function(){
	setSubmit();
	textCounter(this,75);
}
oSubmit.onclick=function(){
	this.style.backgroundColor="#E4E4E4";
	this.disabled=true;
	sentMessage();
}
oUsername.onkeyup=function(){
	textCounter(this,10)
}

function setSubmit(){
	var chatArea=document.getElementById("chatArea"),
		chatContent=chatArea.value;
	var oSubmit=document.getElementById("chatSubmit");
	if (chatContent==""||chatContent=="留下你的态度,不过可不能太过哦~~") {
		oSubmit.style.backgroundColor="#E4E4E4";
		oSubmit.disabled=true;
	}else{
		oSubmit.style.backgroundColor="#1FAC75";
		oSubmit.disabled=false;
	}

}

function sentMessage(){
	tagSentMessage=1;
	var oUsername=document.getElementById("username"),
	    username=(oUsername.value=="")?"IP地址":oUsername.value;
	var chatArea=document.getElementById("chatArea"),
	    chatContent=chatArea.value;
	var oParent=document.getElementById("chatList"),
		oLi=document.createElement("li"),
		oDivChat=document.createElement("div"),
		oSpanUserName=document.createElement("span"),
		oSpanAddTime=document.createElement("span"),
		oDivChatBubble=document.createElement("div");
	var addtime=addTime();

	oLi.setAttribute("class","selfs");
	oParent.appendChild(oLi);

	oSpanUserName.setAttribute("class","userName");
	oSpanUserName.innerText=username;
	oDivChat.appendChild(oSpanUserName);

	oSpanAddTime.setAttribute("class","addTime");
	oSpanAddTime.innerText=addtime;
	oDivChat.appendChild(oSpanAddTime);

	oDivChat.setAttribute("class","chatInfo");
	oLi.appendChild(oDivChat);

	oDivChatBubble.setAttribute("class","chatBubble");
	oDivChatBubble.innerText=chatContent;
	oLi.appendChild(oDivChatBubble);
}

function addTime(){
	var time=new Date();
	var year=time.getFullYear(),
		month=time.getMonth()+1,
		day=time.getDate(),
		hours=time.getHours(),
		minutes=time.getMinutes(),
		seconds=time.getSeconds();
	var timeStr=year+'/'+month+'/'+day+'/'+'  '+hours+':'+minutes+':'+seconds;
	return timeStr;

	//alert(time);
}


function textCounter(field,maxlimit){         
	var charcnt = field.value.length;       
	if (charcnt > maxlimit) {            
		field.value = field.value.substring(0, maxlimit);
		alert("字数已达上限");         
	}else {  
		return true;	          
		/*document.getElementById(counter).innerHTML=charcnt;*/       
	}    
} 








})