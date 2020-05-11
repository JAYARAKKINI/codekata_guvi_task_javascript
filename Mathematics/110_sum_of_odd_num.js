const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=data.split(" ");
    var b=[];
    var sum=0;
    for(i=parseInt(a[0]);i<=parseInt(a[1]);i++){
        if((parseInt(i)%parseInt(2))!=0){
            sum=parseInt(sum)+parseInt(i)
    }
    }
    console.log(sum);
});
