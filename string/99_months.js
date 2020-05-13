const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var a=data.split("-");
  if(parseInt(a[1])===parseInt(01)){
    console.log("January");
  }
  else if(parseInt(a[1])===parseInt(02)){
    console.log("February");
  }
  else if(parseInt(a[1])===parseInt(03)){
    console.log("March");
  }
  else if(parseInt(a[1])===parseInt(04)){
    console.log("April");
  }
  else if(parseInt(a[1])===parseInt(05)){
    console.log("May");
  }
  else if(parseInt(a[1])===parseInt(06)){
    console.log("June");
  }
  else if(parseInt(a[1])===parseInt(07)){
    console.log("July");
  }
  else if(parseInt(a[1])===parseInt(08)){
    console.log("August");
  }
  else if(parseInt(a[1])===parseInt(09)){
    console.log("September");
  }
  else if(parseInt(a[1])===parseInt(10)){
    console.log("October");
  }
  else if(parseInt(a[1])===parseInt(11)){
    console.log("November");
  }
  else if(parseInt(a[1])===parseInt(12)){
    console.log("December");
  }
});
