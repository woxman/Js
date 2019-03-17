var counter_k=0;
var counter_F=0;
var i=0;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function start()
{
    var audio = document.getElementById("sound_1");
    audio.play();
    var x =setTimeout(function ()
    {
        document.getElementById('insect').innerHTML="<div id='flay' onclick='cl()'><div class='eye_1'></div><div class='eye_2'></div><div class='wing_1'></div><div class='wing_2'></div><div class='foot_1'></div><div class='foot_2'></div><div class='foot_3'></div><div class='foot_4'></div><div class='foot_5'></div><div class='foot_6'></div><div class='mouth'></div></div>";
        var s = document.getElementById('flay');
        s.style.border="1px solid black";
        s.style.width= "11px";
        s.style.height= "20px";
        s.style.borderRadius="50%";
        s.style.backgroundColor= "#123221";
        s.style.transition= "2s";
        s.style.position= "fixed";
        s.style.top= "100%";
        var r=getRndInteger(2,97);
        s.style.left=r+"%";
        /*s.offsetTop*/
        if ((s.offsetTop)==(s.offsetTop="20px"))
        {
            counter_F+=1;
            document.getElementById('nf').innerHTML='Number of Flies : '+counter_F;
            alert('slm');
        }
        i++;
    },2000)
}
function cl()
{
    var audio = document.getElementById("sound_2");
    audio.play();
    document.getElementById("flay").style.display = "none";
    counter_k+=1;
    document.getElementById('nk').innerHTML='Number of Killings : '+counter_k;
}



/*counter+=1;
document.getElementById('nk').innerHTML='Number of Killings : '+counter;*/

/*
--------------------------------------------------
 */