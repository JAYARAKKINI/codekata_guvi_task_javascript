const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  console.log(data*1000);
  console.log(data*100000);
});
