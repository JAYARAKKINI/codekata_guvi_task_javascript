const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
   var a=data.split("") ;
   var odd=[];
   var even=[]
   var sum=0;
   for(i=0;i<a.length;i++){
       if((parseInt(a[i])%parseInt(2))==parseInt(0)){
         even.push(a[i])
       }
       else{
           odd.push(a[i])
       }
   }
   for(j=0;j<odd.length;j++){
       sum=parseInt(sum)+parseInt(odd[j])
   }
   if((parseInt(sum)%parseInt(2))==parseInt(0)){
       console.log('E')
   }
   else{
       console.log("O")
   }
});
