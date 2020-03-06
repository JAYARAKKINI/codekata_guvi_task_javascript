const readline=require('readline');
const inp=readline.createInterface({input:process.stdin})
inp.on("line",(data)=>{
    var a=[]
    for(var i=1;i<=data;i++){
     a.push(9*i)
    }
    console.log(a.join(' '));
});
