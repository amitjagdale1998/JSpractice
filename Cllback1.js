var calc=function(fx,a,b)
{
    return fx(a,b);
}

var sum = function(x,y)
{
    return x+y;
}
var a=calc(sum,4,5);
console.log(a);