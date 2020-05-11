const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0].split("");
    var product=1;
    var sum=0;
       for(var i=0;i<a.length;i++)
       {
           number=parseInt(a[i]);
           product*=number;
           sum+=number;
       }
        if(product+sum==userInput)
        console.log("Great");
        else
        console.log("no");
});
