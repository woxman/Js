$(document).ready(function er() {
    Note_Val();
    var Dates = new Date();
    var Days_1 = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
    var Week_1 = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    var Days_2 = Days_1[Dates.getDay()];
    var Year = Dates.getFullYear();
    var Month = Dates.getMonth() + 1;
    var Day = Dates.getDate();
    var shamsi = gregorian_to_jalali(Year, Month, Day);
    var Week_2 = Week_1[shamsi[1] - 1];
    var If_H = checkTime(Dates.getHours());

    //-----------------Print Dates--------------
    $("#Date_1").html( "<div id='d1'>"+Days_2+" <i><sub> ("+checkTime(shamsi[2])+") </i></sub> " +"<br>"+ Week_2 +"<sub><i> ("+checkTime(shamsi[1])+ ") </i></sub><br> "+"</div><div id='d2'><i><sub>(" +shamsi[0]+")</sub></i></div>" );
    $("#Date_2").html("<div id='d3' class='d31'><i>"+Year + ' / ' + checkTime(Month) + ' / ' + checkTime(Day)+"</i></div>");
    //-----------------Print Dates--------------

    //-----------------Check Theme--------------
    if (If_H > 19 && If_H <= 24) {Night()}
    if (If_H > 1 && If_H < 4) {Night()}
    if (If_H > 4 && If_H <= 6) {Morning()}
    if (If_H > 6 && If_H <= 17) {Mid_Morning()}
    if (If_H > 17 && If_H <= 19) {Sunset()}
    //-----------------Check Theme--------------

    //-----------------Print Clock And Check Reload--------------
    setInterval(function () {
        var Time = new Date();
        var Hour = checkTime(Time.getHours());
        var Minute = checkTime(Time.getMinutes());
        var Second = checkTime(Time.getSeconds());

        // will display time in 10:30:23 format
        var formattedTime = Hour + ':' + Minute + ':' + Second;

        $("#Time").html(formattedTime);
        if (Hour == 24 && Minute == 01 && Second == 01) {location.reload();}
        if (Hour == 4 && Minute == 01 && Second == 01) {location.reload();}
        if (Hour == 6 && Minute == 01 && Second == 01) {location.reload();}
        if (Hour == 17 && Minute == 01 && Second == 01) {location.reload();}
        if (Hour == 20 && Minute == 01 && Second == 01) {location.reload();}
    }, 1000);
    //-----------------Print Clock And Check Reload--------------

    //-----------------------------Functions-----------------------------
    function Night() {
        $('body').css("background", "linear-gradient(45deg, rgba(27,30,33,1) 73%, rgba(62,69,69,1) 100%)");
        $('.Sun').css("display", "none");
        $('.Moon').css("display", "block");
        $('.land').css("backgroundColor","#2d3d01")
        Stars();
    }

    function Morning() {
        $('body').css("background-image", "linear-gradient(to right top, #0f2b3b, #242d41, #372e42, #47303f, #51343a)");
        $('.Moon').css("display", "none");
        $('.Sun').css("display", "block");
        $('.Sun').css("background", "#bb0000");
        Stars();
    }

    function Mid_Morning() {
        $('body').css("background", "linear-gradient(17deg, rgba(46,181,229,1) 73%, rgba(253,177,45,1) 100%)");
        $('.Moon').css("display", "none");
        $('.Sun').css("display", "block");
        $('.Sun').css("background", "#FFFF00");
        Stars();
    }

    function Sunset() {
        $('body').css("background", "linear-gradient(17deg, rgba(46,181,229,1) 20%, rgba(253,45,45,1) 100%)");
        $('.Moon').css("display", "none");
        $('.Sun').css("display", "block");
        $('.Sun').css("background", "linear-gradient(to right top, #ffff00, #ffcf00, #ff9e00, #ff6c1f, #f23437)");
        $('.land').css("backgroundColor","#6c8c12")
        $('.land').css("backgroundColor","#6c8c12")
        Stars();
    }

    function Rand_Num(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Stars() {
        for (var j = 0; j <= 30; j++) {
            var x = Rand_Num(1, 100);
            var y = Rand_Num(1, 20);
            $(".Stars").append("<div class='Star' id='Star_" + j + "'></div>");
            $("#Star_" + j).css("top", y + "%");
            $("#Star_" + j).css("left", x + "%");
            /*$("#Star_"+j+2).css("animation","Blink 5s infinite");*/
        }
        for (var j = 0; j <= 2; j++) {
            var x = Rand_Num(-10, -80);// %-left
            var y = Rand_Num(1, 20);// px-top
            var w = Rand_Num(100, 180);// s-duration

            $(".Clouds").append("<div class='Cloud' id='Cloud_" + j + "'></div>");
            $("#Cloud_" + j).css("top", y + "%");
            $("#Cloud_" + j).css("left", x + "%");
            $("#Cloud_").css("animationDuration", w + "s");
        }
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        ;  // add zero in front of numbers < 10
        return i;
    }

    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    $(".Note").on("blur",function () {
        var n=$(".Note").val();
        n=encodeURIComponent(n);
        setCookie("Notes", n, 2365);
    });
    function Note_Val() {
        var nm=getCookie("Notes");
        if (nm != "") {
            $(".Note").val(nm);
        }else{
            $(".Note").html("▂▃▄▅▆▇█▓▒░به نام خدا░▒▓█▇▆▅▄▃▂\n" +
                "                                         یادداشت من :");
        }
    }
    //-----------------------------Functions-----------------------------
}); 