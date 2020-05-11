const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var n=[];
imp.on("line",(data)=>{
    n.push(data);
});

imp.on("close",()=>{
    var a=parseInt(n[0]);
    var r=n[1].split(" ");
  function Frequency(r) {
    var f = {};
    var sort = [];
    var w = [];

    r.forEach(function(v) {
        if ( v in f )
            f[v] = f[v] + 1;
        else
            f[v] = 1;
    });
   for(var k in f){
        sort.push([k, f[k]]);
    }
    sort.sort(function(a, b){
        return a[1] - b[1];
    });
sort.forEach(function(o){
        for(var i=0; i < o[1]; i++){
            w.push(o[0]);
        }
    });
    return w;
   }
var b=Frequency(r);
console.log(b.join(" "));
});
