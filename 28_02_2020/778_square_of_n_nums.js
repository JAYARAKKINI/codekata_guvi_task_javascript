const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
    if(data<0){
        console.log('Error');
    }
    else if(data==0)
    {
        console.log('0');
    }
    else{
        console.log(Math.pow(data,2));
    }
});
