$(document).ready(function(){
    Language_Val();
    var x=$("#Second_Clock").position();
    alert(x.left);
    $('#Fa').on("click",function () {
        Persian();
        Set_Cookie("Language","Fa",2365);
    });
    $('#En').on("click",function () {
        English();
        Set_Cookie("Language","En",2365);
    })
    $('.timepicker1').timepicker({ 'timeFormat': 'H:i' });
    $('.timepicker2').timepicker({ 'timeFormat': 'H:i' });
//---------------Functions----------------------------------------------
    function English() {
        $('#First_Day,#F_S').text("Saturday");
        $('#Second_Day,#S_S').text("Sunday");
        $('#Third_Day,#T_S').text("Monday");
        $('#Fourth_Day,#FO_S').text("Tuesday");
        $('#Fifth_Day,#FI_S').text("Wednesday");
        $('#Sixth_Day,#SI_S').text("Thursday");
        $('#Seventh_Day,#SE_S').text("Friday");
        $('#Language').html("&nbsp;Language");
        $('#Add_btn').html("&nbsp;Add");
        $('#Add_Title').text("Enter Information");
        $('#Add_Send').text("Record");
        $('#Slect_Title').text("Choose....");
        $('#Name_Title').text("Title : ");
        $('#Day_Title').text("Day : ");
        $('#Time_Title').text("Time : ");
        $('#Note_Title').text("Note : ");
        $('#Modal_Body').css("direction","ltr");
    }
    function Persian() {
        $('#First_Day,#F_S').text("شنبه");
        $('#Second_Day,#S_S').text("یکشنبه");
        $('#Third_Day,#T_S').text("دوشنبه");
        $('#Fourth_Day,#FO_S').text("سه شنبه");
        $('#Fifth_Day,#FI_S').text("چهارشنبه");
        $('#Sixth_Day,#SI_S').text("پنجشنبه");
        $('#Seventh_Day,#SE_S').text("جمعه");
        $('#Language').html("&nbsp;زبان");
        $('#Add_btn').html("&nbsp;اضافه کردن");
        $('#Add_Title').text("وارد کردن اطلاعات");
        $('#Add_Send').text("ثبت");
        $('#Slect_Title').text("انتخواب....");
        $('#Name_Title').text("عنوان : ");
        $('#Day_Title').text("روز : ");
        $('#Time_Title').text("زمان : ");
        $('#Note_Title').text("یادداشت:");
        $('#Modal_Body').css("direction","rtl");
    }

    function Language_Val() {
        var nm=Get_Cookie("Language");
        if (nm != "") {
            if (nm=="Fa"){
                Persian();
            }else if (nm=="En"){
                English();
            }
        }else{
            Persian();
        }
    }

    function Set_Cookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function Get_Cookie(cname) {
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

//---------------Functions----------------------------------------------
});