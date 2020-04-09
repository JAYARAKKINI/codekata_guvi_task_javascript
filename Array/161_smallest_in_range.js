const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data) ;
}),
inp.on("close",()=>{
    var a=n[0].split(" ");
    var b=n[1].split(" ");
    var list=[];
    for(i=parseInt(a[1]-1);i<=parseInt(a[2]-1);i++){
        list.push(b[i]);
    }
    console.log(Math.min.apply(null,list));
});
