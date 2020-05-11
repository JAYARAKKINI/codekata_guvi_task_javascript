const readline=require('readline');
const inp=readline.createInterface({input:process.stdin})
const n=[]
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",(data)=>{
    var a=n[0];
	var b=n[1];
    var c=n[2];
    if(a>b && a>c)
  		console.log(a);
  	if(b>a && b>c)
  		console.log(b);
    else
      console.log(c);
});
