const index = (array, callback) => {
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        return i
      }
  }
}
const indexval =(value)=>value==2
console.log(index([2,3,5,8,12], indexval))
