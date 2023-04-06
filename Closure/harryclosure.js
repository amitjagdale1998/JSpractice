message="hello ";

function Closure1()
{
    let message="not hello"
    // console.log("hello:"+message);
   let a= function Closure2()
    {
        console.log("here:"+message);
    }
    message="this is real value";
     return a;
}

a=Closure1();
a();