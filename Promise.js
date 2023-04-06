function func1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            const error=true;
            if(!error)
            {
                console.log('your promise has been resolved');
                resolve();
            }
            else
            {
                console.log('Your Promise has not resolved');
                reject('sorry not fulfilled');
            }
        },5000);
    })
}
func1().then( function()
{
    console.log("harry:Thanks for rsolving")
}).catch(function(error)
{
    console.log("very bad bro"+error);
})