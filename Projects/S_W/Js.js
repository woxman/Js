var audio_1 = document.getElementsByTagName("audio")[0];
var cheeph = document.getElementById('Cheeph');
function td()
{
    audio_1.pause();
    var x = document.getElementById('Jet');
    x.style.display = "block";
    x.style.animation = "Jet_M 6s forwards";
    cheeph.style.display = "none"
}

//**************After_Load_Page**************
document.getElementsByTagName("body")[0].onload = function ()
{
    audio_1.play();
    cheeph.style.animation = "Cheeph_O 7s forwards";
};
//**************After_Load_Page**************

//**************After_Onclick_Start_Button**************
document.getElementById('start').onclick = function ()
{
    td();
    document.getElementById('start').style.display="none";
    document.getElementById('b_g').style.display="block";
    var r=0;
    setInterval(function ()
    {
        r++;
        document.getElementById('add').innerHTML="<img id='"+r+"attacker' src='Contact/attacker.png' alt=''>";
        var w= document.getElementById(r+'attacker');
        w.style.left=(Math.floor(Math.random()* 90)+1)+"%";
        w.style.animation="Attacker_M 5s";

    },4000)
};
//**************After_Onclick_Start_Button**************

//**************Jet_Controller**************
document.getElementById('right').onclick = function ()
{
    var rk = document.getElementById('Jet');
    rk.style.marginRight = "100px";
};

document.getElementById('left').onclick = function ()
{
    var lk = document.getElementById('Jet');
    lk.style.marginLeft = "100px";
};

//**************Jet_Controller**************



