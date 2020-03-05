const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var n=Math.round(data)
    if(n==0){
        console.log('Zero');
    }
    else if(n%2==0)
    {
        console.log('Even');
    }
    else{
        console.log('Odd');
    }
});
