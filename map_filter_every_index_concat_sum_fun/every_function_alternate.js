const eve = (array, callback) => {
var count=0;
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        count+=1;
      }
  }
  if(count==array.length){
    return true
  }
  else
    {
      return false
    }
}
const every =(value)=>value>0
console.log(eve([10,30,50,80,12], every) )
