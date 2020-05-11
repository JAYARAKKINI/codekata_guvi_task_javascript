const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var a=[]
    a=data.split(' ');
    var x=a[0]
    var y=a[1]
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  if(t>0){
console.log(t);}
else{
    console.log('-1');
}
});
