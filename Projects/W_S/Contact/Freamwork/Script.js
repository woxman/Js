$(document).ready(function(){
    Persian();
    $('#Fa').on("click",function () {
        Persian();
    });

    $('#En').on("click",function () {
        $('#First_Day').text("Saturday");
        $('#Second_Day').text("Sunday");
        $('#Third_Day').text("Monday");
        $('#Fourth_Day').text("Tuesday");
        $('#Fifth_Day').text("Wednesday");
        $('#Sixth_Day').text("Thursday");
        $('#Seventh_Day').text("Friday");
        $('#Language').html("&nbsp;Language");
        $('#Add_btn').html("&nbsp;Add");
        $('#Add_Title').text("Enter Information");
    })
    function Persian() {
        $('#First_Day').text("شنبه");
        $('#Second_Day').text("یکشنبه");
        $('#Third_Day').text("دوشنبه");
        $('#Fourth_Day').text("سه شنبه");
        $('#Fifth_Day').text("چهارشنبه");
        $('#Sixth_Day').text("پنجشنبه");
        $('#Seventh_Day').text("جمعه");
        $('#Language').html("&nbsp;زبان");
        $('#Add_btn').html("&nbsp;اضافه کردن");
        $('#Add_Title').text("وارد کردن اطلاعات");
    }
});