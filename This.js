var data=
{
    name:'amit',
    lastname:'jagdale',
    
    abc:function returnData()
    {
    return this.name+" "+this.lastname;
      }
}

var fetch=data.abc();
console.log(fetch);
var fetch2=data.abc();
console.log(fetch2);

