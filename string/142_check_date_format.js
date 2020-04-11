const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=data.split("/")
    var count=0;
    if(parseInt(a[0])<=parseInt(31)){
        if(parseInt(a[1])<=parseInt(12)){
            if(a[2].length==parseInt(4)){
                console.log("yes");
            }else{
                console.log("no")
            }
        }
        else{
            console.log("no")
        }
    }else{
        console.log("no")
    }
});
