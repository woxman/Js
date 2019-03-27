$(document).ready(function er()
{
	Tomorrow();
	function Tomorrow()
	{
		var Dates=new Date();
		var Days_1 = ["سه شنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج  شنبه", "جمعه", "شنبه"];
		var Week_1 = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی",  "بهمن",  "اسفند"];
        var Days_2 =Days_1[Dates.getDay()];
		var Year=Dates.getFullYear();
		var Month=Dates.getMonth()+1;
		var Day=Dates.getDate();
		var shamsi=gregorian_to_jalali(Year,Month,Day);
		var Week_2 =Week_1[shamsi[1]-1];

		$("#Date_1").html(shamsi[0]+' / '+checkTime(shamsi[1])+' / '+checkTime(shamsi[2])+' :جلالی<br> ');
		$("#Date_2").html(Days_2+" / "+checkTime(shamsi[1]));
		$("#Date_3").html(Year+' / '+checkTime(Month)+' / '+checkTime(Day)+' :میلادی  ');
		$("#Date_5").html(Week_2);
		$("#Date_6").html();
	}
 
	setInterval(function ()
	{
	    var Time = new Date();
	    var Hour = checkTime(Time.getHours());
	    var Minute = checkTime(Time.getMinutes());
	    var Second = checkTime(Time.getSeconds());

	    // will display time in 10:30:23 format
	    var formattedTime = Hour + ':' + Minute + ':' + Second;
    
	    $("#Time").html(formattedTime);
	    if (Hour==24 && Minute==01 && Second==01) {Tomorrow();}
	}, 1000);
	function checkTime(i)
	{
	    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	    return i;
	}

	$("#Code").on("click",function(){alert(er.toString());});
}); 