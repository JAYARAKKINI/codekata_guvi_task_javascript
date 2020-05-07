const index = (array, callback) => {
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        return i
      }
  }
}
const indexval =(value)=>value==2
console.log(index([12,7,10,6,2], indexval))
