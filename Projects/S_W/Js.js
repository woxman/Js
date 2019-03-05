function Zip()
{

}

function National()
{
    var sum=0;
    var id = document.getElementById('Number').value;
    sum += id.substr(0,1)*10;
    sum += id.substr(1,1)*9;
    sum += id.substr(2,1)*8;
    sum += id.substr(3,1)*7;
    sum += id.substr(4,1)*6;
    sum += id.substr(5,1)*5;
    sum += id.substr(6,1)*4;
    sum += id.substr(7,1)*3;
    sum += id.substr(8,1)*2;
    sum = sum%11;
    if(sum>1)
    {
        sum=11-sum;
    }
    if(id.substr(-1)==sum)
        document.getElementById('answer').innerHTML="National Code is Valid";
    else
        document.getElementById('answer').innerHTML="National Code is InValid";
}

function ISBN()
{
    var sum=0;
    var shabak = document.getElementById('Number').value;
    sum += shabak.substr(0,1)*1;
    sum += shabak.substr(1,1)*3;
    sum += shabak.substr(2,1)*1;
    sum += shabak.substr(3,1)*3;
    sum += shabak.substr(4,1)*1;
    sum += shabak.substr(5,1)*3;
    sum += shabak.substr(6,1)*1;
    sum += shabak.substr(7,1)*3;
    sum += shabak.substr(8,1)*1;
    sum += shabak.substr(9,1)*3;
    sum += shabak.substr(10,1)*1;
    sum += shabak.substr(11,1)*3;
    sum = sum%10;
    if (sum > 0)
    {
        sum = 10 - sum;
    }

    if(shabak.substr(-1)==sum)
        document.getElementById('answer').innerHTML="ISBN Code is Valid";
    else
        document.getElementById('answer').innerHTML="ISBN Code is InValid";


}