const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on('close',()=>{
    var sum=0
    var count=0;
    var a=n[0]
    var b=n[1].split(' ')
    var c=Math.min.apply(null,b)
    var d=Math.max.apply(null,b)
    for(var i=0;i<parseInt(b.length);i++)
    {
        if(parseInt(c)==b[i]){
           var val1=parseInt(sum)+parseInt(i); 
        }
    }
    for(var j=0;j<parseInt(b.length);j++){
        if(parseInt(d)==b[j]){
           var val2=parseInt(sum)+parseInt(j);
        }
    }
console.log(val1+1,val2+1);
});
