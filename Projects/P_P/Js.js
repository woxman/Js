$(document).ready(function er()
{
	function shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}

	var x=["Shanbe","YekShanbe","DoShanbe","SeShanbe","CharShanbe","PangShanbe","Joomeh","1","2","3"];
	var y=["Shanbe","YekShanbe","DoShanbe","SeShanbe","CharShanbe","PangShanbe","Joomeh","1","2","3"];
	var xr=shuffle(x);
	var yr=shuffle(y);
//	alert(shuffle(x));
	for (var i=0;i <= 9; i++)
	{
		$("#carts").append("<button class='cart' id='"+i+"'><p>"+xr[i]+"</p></button>");
	}
	var f=10;
	for (var i=0;i <= 9; i++)
	{
		$("#carts").append("<button class='cart' id='"+f+"'><p>"+yr[i]+"</p></button>");
		f++;
	}

	function S_R(k)
	{
		$(k).css("transform", "rotateY(180deg)"); 
		$(k+" p").css("transform", "rotateY(-180deg)");
 		$(k+" p").css("display", "block");
	}
	$("p").css("display", "none");
	$("#0").on("click",function(){S_R("#0");});
	$("#1").on("click",function(){S_R("#1");});
	$("#2").on("click",function(){S_R("#2");});
	$("#3").on("click",function(){S_R("#3");});
	$("#4").on("click",function(){S_R("#4");});
	$("#5").on("click",function(){S_R("#5");});
	$("#6").on("click",function(){S_R("#6");});
	$("#7").on("click",function(){S_R("#7");});
	$("#8").on("click",function(){S_R("#8");});
	$("#9").on("click",function(){S_R("#9");});
	$("#10").on("click",function(){S_R("#10");});
	$("#11").on("click",function(){S_R("#11");});
	$("#12").on("click",function(){S_R("#12");});
	$("#13").on("click",function(){S_R("#13");});
	$("#14").on("click",function(){S_R("#14");});
	$("#15").on("click",function(){S_R("#15");});
	$("#16").on("click",function(){S_R("#16");});
	$("#17").on("click",function(){S_R("#17");});
	$("#18").on("click",function(){S_R("#18");});
	$("#19").on("click",function(){S_R("#19");});


	$("#Code").on("click",function(){alert(er.toString());});
}); 