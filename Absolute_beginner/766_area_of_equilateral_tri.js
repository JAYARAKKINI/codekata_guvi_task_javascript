const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  area=(Math.sqrt(3)/4)*(data*data);
  console.log(area.toFixed(2));
});
