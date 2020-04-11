const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const m=[];
inp.on("line",(data)=>{
    m.push(data)
});
inp.on("close",()=>{
    var a=m[0].split(" ");
    var arr=m[1].split(" ");
    var list=[]
    var n=parseInt(a[1])
    for(i=0;i<parseInt(n);i++){
        var first;
        first=parseInt(arr[0]);
        for(j=0;j<(arr.length)-parseInt(1);j++){
            arr[parseInt(j)]=arr[parseInt(j)+parseInt(1)]
        }  
        arr[arr.length-parseInt(1)]=parseInt(first);
    }
    
    for(i=0;i<arr.length;i++){
        list.push(arr[i]);
    }
    console.log(list.join(" "))
});
