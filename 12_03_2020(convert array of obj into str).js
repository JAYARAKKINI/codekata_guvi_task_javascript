var a=[{type:"str",value:"hello"},{type:"op",value:"or"},{type:"str",value:"world"}]
var list=[];
for(i=0;i<a.length;i++)
{
    if(a[i].type=='str')
    {
        list.push(a[i].value);
    }
    else
    {
        if(a[i].value=='and')
            {
                var b=a[i].value
                var c=b.replace("and",'&&');
                list.push(c);
            }
        else(a[i].value=='or')
            {
                var e=a[i].value
                var f=e.replace("or",'||');
                list.push(f); 
            }
    }
}
console.log(list.join(""));
