const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    var fah=(parseInt(data)*1.8)+32
    console.log(fah.toFixed(2));
});
