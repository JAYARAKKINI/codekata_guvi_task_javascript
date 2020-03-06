const readline=require('readline');
const inp=readline.createInterface({input:process.stdin})
inp.on("line",(data)=>{
    var a=[]
    a=data.split(" ")
    var A1=a[0]
    var A2=a[1]
    if(((A1=="R")&&(A2=="P"))||((A1=="S") && (A2=="R"))||((A1=="P")&&(A2=="S")))
    {
        console.log(A2);
    }
    else if(((A1=="R")&&(A2=="P"))||((A1=="P") && (A2=="R"))||((A1=="S")&&(A2=="P")))
    {
        console.log(A1);
    }
    else if(A1==A2)
    {
        console.log('D');
    }
});
