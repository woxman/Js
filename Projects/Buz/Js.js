$(document).ready(function ()
{
    $('#s').on("click",function ()
    {
        $('#i').on("onmouseout",function ()
        {
            alert("شما باختید...دوباره شروع کنید");
        });
    });
});