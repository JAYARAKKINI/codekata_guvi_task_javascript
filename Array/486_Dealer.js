const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on('close',()=>{
    var a=n[0]
    var b=n[1].split(" ")
    var c=Math.min.apply(null,b);
    for(i=0;i<parseInt(a);i++){    
        if(parseInt(b[i])==parseInt(c)){
    console.log("Dealer"+i);
        }
    }
});
