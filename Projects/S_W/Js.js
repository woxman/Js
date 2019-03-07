var audio_1 = document.getElementsByTagName("audio")[0];
document.getElementsByTagName("body")[0].onload = function() {
    audio_1.play();
};

document.getElementById('start').onclick = function () {
    td()
};

function td() {
    audio_1.pause();
    var x = document.getElementById('Jet');
    x.style.display ="block";
    x.style.animation="Jet_M 6s forwards";
}


document.addEventListener('keyup', function(e){

    if(e.keyCode == 'Q'.charCodeAt()){
    } else if(e.keyCode == 39){

        //Right key
        var lk = document.getElementById('Jet');
        lk.style.marginLeft="100px";

    }  else if(e.keyCode == 37){

        //Left key
        var rk = document.getElementById('Jet');
        rk.style.marginRight="100px";

    }  else if(e.keyCode == 32){

        //Space key

    }
});