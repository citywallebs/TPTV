<!--tvwall.php-->

<div  class="tvwallContainer">
	<div  class="sideNav">
		<div  class="line"></div>
		<ol  id="sideNav">
			<li  id="sideNav_1"><em></em><span>央视频道</span></li>
			<li  id="sideNav_2"><em></em><span>省台卫视</span></li>
			<li  id="sideNav_3"><em></em><span>其他频道</span></li>
		</ol>
	</div>
	<div  class="tvList">
		<div  class="listDetail" id="listDetail_1">
			<h3>央视频道</h3>
			<ul>
				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/02.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/01.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/03.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/06.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>
				<div  class="clearfix"></div>
			</ul>
		</div>


		<div  class="listDetail"  id="listDetail_2">
			<h3>省台卫视</h3>
			<ul>
				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/02.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/01.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/03.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/06.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>
				<div  class="clearfix"></div>
			</ul>
		</div>

		<div  class="listDetail"  id="listDetail_3">
			<h3>其他频道</h3>
			<ul>
				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/02.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/01.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/03.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>

				<li  class="channelDetail">
					<a  href="#"  class="channelImg">
						<img src="../images/06.jpg">
						<p  class="channelName">CCTV-戏曲</p>
					</a>
				</li>
				<div  class="clearfix"></div>
			</ul>
		</div>
		
	</div>

	<div  class="clearfix"></div>
</div><!--/end of tvwall.php-->
<div  class="clearfix"></div>
<script  type="text/javascript">
	
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
line.height(tvwallContainerH);

var oSideNav=document.getElementById('sideNav');
var oSideNavLi=oSideNav.getElementsByTagName('span');
oSideNav.onclick=function(e){
	var e=e||window.event;
	var curEle=e.target||e.srcElement;
	
	for (var i = 0; i < oSideNavLi.length; i++) {
		var listDetails=$(".listDetail");
		if(oSideNavLi[i]==curEle){
			var scrollH=mainH;
			for (var j = 0; j < i; j++) {
				scrollH +=listDetails[j].outerHeight();
			}
			$("body").scrollTop(scrollH);
			$("#sideNav").css({"top":i*583});

		}
	}
}



})


</script>