$(document).ready(function er()
{
	var sum;
	function repp(x)
	{
		sum = x.replace("undefined", " ");
		$("#Result").html(sum);
	}
	$("#0").on("click",function(){sum="";$("#Result").html(" ");});
	$("#1").on("click",function(){var m = $("#Result").html();$("#Result").html(Math.abs(m));});
	$("#2").on("click",function(){var w=$("#2").val();sum+=w;repp(sum)});
	$("#3").on("click",function(){var w=$("#3").val();sum+=w;repp(sum)});
	$("#4").on("click",function(){var w=$("#4").val();sum+=w;repp(sum)});
	$("#5").on("click",function(){var w=$("#5").val();sum+=w;repp(sum)});
	$("#6").on("click",function(){var w=$("#6").val();sum+=w;repp(sum)});
	$("#7").on("click",function(){var w=$("#7").val();sum+=w;repp(sum)});
	$("#8").on("click",function(){var w=$("#8").val();sum+=w;repp(sum)});
	$("#9").on("click",function(){var w=$("#9").val();sum+=w;repp(sum)});
	$("#10").on("click",function(){var w=$("#10").val();sum+=w;repp(sum)});
	$("#11").on("click",function(){var w=$("#11").val();sum+=w;repp(sum)});
	$("#12").on("click",function(){var w=$("#12").val();sum+=w;repp(sum)});
	$("#13").on("click",function(){var w=$("#13").val();sum+=w;repp(sum)});
	$("#14").on("click",function(){var w=$("#14").val();sum+=w;repp(sum)});
	$("#15").on("click",function(){var w=$("#15").val();sum+=w;repp(sum)});
	$("#16").on("click",function(){var w=$("#16").val();sum+=w;repp(sum)});
	$("#17").on("click",function(){var w=$("#17").val();sum+=w;repp(sum)});
	$("#18").on("click",function(){$("#Result").html(eval(sum));});

	$("#Code").on("click",function(){alert(er.toString());});
}); 