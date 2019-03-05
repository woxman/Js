function Encrypt()
{
    var txt = document.getElementById('Text').value;
    var key = document.getElementById('Key').value;
    var d0 = String.fromCharCode(parseInt(txt.charCodeAt(0))+parseInt(key));
    var d1 = String.fromCharCode(parseInt(txt.charCodeAt(1))+parseInt(key));
    var d2 = String.fromCharCode(parseInt(txt.charCodeAt(2))+parseInt(key));
    var d3 = String.fromCharCode(parseInt(txt.charCodeAt(3))+parseInt(key));
    var d4 = String.fromCharCode(parseInt(txt.charCodeAt(4))+parseInt(key));
    document.getElementById("answer").innerHTML = (d0+d1+d2+d3+d4);
}