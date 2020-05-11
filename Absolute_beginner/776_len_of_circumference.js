const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
	cir=2*3.14159*data;
  console.log(cir.toFixed(2));
});
