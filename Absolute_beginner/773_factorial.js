const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
	var a=1;
  	for(var i=2;i<=data;i++)
  	{
    	a=a*i;
  	}
  	console.log(a);
});
