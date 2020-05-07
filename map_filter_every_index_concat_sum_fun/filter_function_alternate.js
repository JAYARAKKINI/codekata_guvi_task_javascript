const myfilter=(array,callback)=>{
    let newArray=[]
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray
}
const predicat=(x)=>x%2===0
const data=[1,2,3,4,5,6]
console.log(myfilter(data,predicat))
