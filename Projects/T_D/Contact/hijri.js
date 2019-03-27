var fixd;

function isGregLeapYear(year)
{
return year%4 == 0 && year%100 != 0 || year%400 == 0;
}


function gregToFixed(year, month, day)
{
var a = Math.floor((year - 1) / 4);
var b = Math.floor((year - 1) / 100);
var c = Math.floor((year - 1) / 400);
var d = Math.floor((367 * month - 362) / 12);

if (month <= 2)
e = 0;
else if (month > 2 && isGregLeapYear(year))
e = -1;
else
e = -2;

return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
}

function Hijri(year, month, day)
{
this.year = year;
this.month = month;
this.day = day;
this.toFixed = hijriToFixed;
this.toString = hijriToString;
}

function hijriToFixed()
{
return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
}

function hijriToString()
{
var months = new Array("محرم","صفر","ربيع الاول","ربيع الثانی","جمادی الاولی","جمادی الثانی","رجب","شعبان","رمضان","شوال","ذی القعده","ذی الحجه");
return  this.day + " / " + months[this.month - 1]+ " / " + this.year;
}

function fixedToHijri(f)
{
var i=new Hijri(1100, 1, 1);
i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
var i2=new Hijri(i.year, 1, 1);
var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
i.month = Math.min(m, 12);
i2.year = i.year;
i2.month = i.month;
i2.day = 1;
i.day = f - i2.toFixed() + 1;
return i;
}

var tod=new Date();
var weekday=new Array("يکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه");
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

var y = tod.getFullYear();
var m = tod.getMonth();
var d = tod.getDate();
var dow = tod.getDay();

m++;
fixd=gregToFixed(y, m, d);
var h=new Hijri(1421, 11, 28);
h = fixedToHijri(fixd);
document.write(h.toString() + "");

        