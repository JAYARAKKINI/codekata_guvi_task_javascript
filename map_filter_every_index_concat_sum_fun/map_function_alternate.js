const map = (array, callback) => {
  let a=[];
  for(var i=0;i<array.length;i++){
    a.push(callback(array[i]));
  }
  return a
}
const mapvalue =(value)=>Math.sqrt(value);
console.log(map([7,2,5], mapvalue) )
