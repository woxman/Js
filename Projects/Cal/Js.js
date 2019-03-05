function Cal()
{
    var x = parseInt(document.getElementById('Number1').value);
    var y = parseInt(document.getElementById('Number2').value);
    var w = document.getElementById('Operator').value;
    switch (w)
    {
        case '+':
            document.getElementById('answer').innerHTML=(x+y);
            break;

        case '-':
            document.getElementById('answer').innerHTML=(x-y);
            break;

        case '*':
            document.getElementById('answer').innerHTML=(x*y);
            break;

        case '/':
            document.getElementById('answer').innerHTML=(x/y);
            break;

        case '%':
            document.getElementById('answer').innerHTML=(x%y);
            break;

        case '**':
            document.getElementById('answer').innerHTML=(x**y);
            break;
    }
}