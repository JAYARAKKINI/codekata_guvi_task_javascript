const some = (array, callback) => {
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        return true
      }
  }
  return false
}
const somefun =(value)=>value%2==0
console.log(some([2,3,5,8,12], somefun) )
